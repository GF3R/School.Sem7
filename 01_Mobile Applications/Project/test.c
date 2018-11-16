#include <stdlib.h>
#include <microhttpd.h>
#include <zlib.h>
#include <stdbool.h>
#include <string.h>


static ssize_t
crc (void *cls,
     uint64_t pos,
     char *buf,
     size_t size_max)
{
  if (0 == size_max)
    return 0;
  if (0 == rand() % 1024 * 1024)
    return MHD_CONTENT_READER_END_OF_STREAM;
  *buf = 'b';
  return 1;
}

int
body_compress (void **buf, size_t *buf_size)
{
  uLongf cbuf_size = compressBound (*buf_size);
  Bytef *cbuf = malloc (cbuf_size);
  int ret = compress (cbuf, &cbuf_size,
     (const Bytef *) *buf, *buf_size);
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
   char *page = strdup ("<html><body><h1>Hello,browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1><h1>Hello, browser!</h1></body></html>"
	
	      );
  size_t plen;
  int ret;
  int compressed;
  const char* sup;

  sup = MHD_lookup_connection_value (connection, MHD_HEADER_KIND, MHD_HTTP_HEADER_ACCEPT_ENCODING);
  
  plen = strlen(page);

  compressed = 0;
  {
    char *b;
    b = strdup (sup);
    for (char *tok = strtok (b, ", "); NULL != tok; tok = strtok (NULL, ", "))
      if (0 == strcasecmp (tok, "gzip"))
	{
	  compressed = body_compress ((void **) &page,
				      &plen);
	  break;
	}
    free (b);
  }


  struct MHD_Response *response
     = MHD_create_response_from_buffer(plen, page, MHD_RESPMEM_MUST_FREE);
  if(compressed)
   MHD_add_response_header (response,
			     MHD_HTTP_HEADER_CONTENT_ENCODING,
			     "gzip");

  MHD_add_response_header (response,
  MHD_HTTP_HEADER_CONTENT_ENCODING,
  "test");

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
