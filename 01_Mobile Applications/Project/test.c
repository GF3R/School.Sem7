#include <stdlib.h>
#include <microhttpd.h>
#include <zlib.h>
#include <stdbool.h>
#include <string.h>

/**
 * Try to compress a response body.  Updates @a buf and @a buf_size.
 *
 * @param[in,out] buf pointer to body to compress
 * @param[in,out] buf_size pointer to initial size of @a buf
 * @return true if buf was compressed
 */
int
body_compress (void **buf, size_t *buf_size)
{
  uLongf cbuf_size = compressBound (*buf_size);
  Bytef *cbuf = malloc (cbuf_size);
  int ret = compress (cbuf, &cbuf_size,
     (const Bytef *) *buf, *buf_size);
  if ((Z_OK != ret) || (cbuf_size >= *buf_size))
    {
      free (cbuf); return 0;
    }
  free (*buf);
  *buf = (void *) cbuf;
  *buf_size = (size_t) cbuf_size;
  return 1;
}


static int
answer_to_connection (void *cls,
		      struct MHD_Connection *connection,
		      const char *url,
		      const char *method,
		      const char *version,
		      const char *upload_data,
		      size_t *upload_data_size,
		      void **con_cls)
{
  char *page
    = strdup ("<html><body>Hello, browser!</body></html>"
	      "<html><body>Hello, browser!</body></html>"
	      "<html><body>Hello, browser!</body></html>"
	      "<html><body>Hello, browser!</body></html>"
	      "<html><body>"
        "<br><h1>hoi</h1></body></html>"
	      "<html><body>Hello, browser!</body></html>"
	      "<html><body>Hello, browser!</body></html>"
	      "<html><body>Hello, browser!</body></html>"
	      "<html><body>Hello, browser!</body></html>"
	      );
  size_t plen;
  int ret;
  bool compressed;
  const char *sup;

  plen = strlen (page);
  sup = MHD_lookup_connection_value (connection,
				     MHD_HEADER_KIND,
				     MHD_HTTP_HEADER_ACCEPT_ENCODING);
  compressed = false;
 
  struct MHD_Response *response
     = MHD_create_response_from_buffer
    (plen,
     page,
     MHD_RESPMEM_MUST_FREE);
  if (compressed)
    MHD_add_response_header (response,
			     MHD_HTTP_HEADER_CONTENT_ENCODING,
			     "gzip");
  ret = MHD_queue_response (connection,
			    MHD_HTTP_OK,
			    response);
  MHD_destroy_response (response);
  return ret;
}


int
main ()
{
  struct MHD_Daemon *daemon 
    = MHD_start_daemon (MHD_USE_AUTO | \
                        MHD_USE_INTERNAL_POLLING_THREAD,
                        8888,
                        NULL, NULL,
                        &answer_to_connection, NULL,
                        MHD_OPTION_END);
  if (NULL == daemon)
    return 1;
  (void) getchar ();
  MHD_stop_daemon (daemon);
  return 0;
}
