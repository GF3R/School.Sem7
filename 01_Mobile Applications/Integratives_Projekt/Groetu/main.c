/* Feel free to use this example code in any way
   you see fit (Public Domain) */

#include <sys/types.h>
#ifndef _WIN32
#include <sys/select.h>
#include <sys/socket.h>
#else
#include <winsock2.h>
#endif
#include <string.h>
#include <microhttpd.h>
#include <stdio.h>
#include <stdlib.h>
#include <jansson.h>

#define PORT 8888

static int handleGetRequest(void *cls, struct MHD_Connection *connection);
static int handleUnimplementeRequest();
static int handlePostRequest();
static int handlePutRequest();

static ssize_t crc(void *cls,
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

static int answer_to_connection (void *cls, struct MHD_Connection *connection,
                      const char *url, const char *method,
                      const char *version, const char *upload_data,
                      size_t *upload_data_size, void **con_cls)
{
  int ret = 0;
  if(strcmp(method, "GET")){
    ret = handleGetRequest(cls,connection);
  }else if(strcmp(method, "POST")){
    ret = handlePostRequest();
  }else if(strcmp(method, "PUT")){
    ret = handlePutRequest();
  }else {
    ret = handleUnimplementeRequest();
  }
  return ret;
}

static int handleUnimplementeRequest(){
  printf("unimpelmented request revieved");
  return 0;
}

static int handlePostRequest(){
  printf("Post request revieved");
  return 0;
}

static int handlePutRequest(){
  printf("Put request revieved");
  return 0;
}


static int handleGetRequest(struct MHD_Connection *connection){
  printf("Get request revieved");
  const char *page = "<html><body>Hello, browser!</body></html>";

  json_t *j = json_pack("{s:i,s:i}", "hello", 5, "world", 10);
  char *s = json_dumps(j, 0);

  struct MHD_Response *response = MHD_create_response_from_callback(MHD_SIZE_UNKNOWN, 1024 , &crc , NULL, NULL);
  int ret;
    

  response =
    MHD_create_response_from_buffer (strlen (s), (void *) s, 
				     MHD_RESPMEM_PERSISTENT);
  MHD_add_response_header (response , MHD_HTTP_HEADER_CONTENT_TYPE, "text/html");
  ret = MHD_queue_response (connection, MHD_HTTP_OK, response);
  MHD_destroy_response (response);
  return ret;
}

int main (void)
{
  struct MHD_Daemon *daemon;

  daemon = MHD_start_daemon (MHD_USE_AUTO | MHD_USE_INTERNAL_POLLING_THREAD, PORT, NULL, NULL,
                             &answer_to_connection, NULL, MHD_OPTION_END);
  if (NULL == daemon)
    return 1;

  (void) getchar ();

  MHD_stop_daemon (daemon);
  return 0;
}
