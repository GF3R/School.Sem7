# GROTHOFFF!!!! 

## The hyper Text Transfer Protocol (HTTP)

Ziel: Restfull service mit Datenbank. 

Runs over TCP (Port 80) or as HTTPS or TLS (port 443)

### The HTTP Request

TCP Option -> TCP Fast open, erlaubt eine Anfrage (Des Client) mit dem TCP syn, gleich Daten schicken.

Ist aber gefährlich weil, die Daten an einen falschen Client geschickt werden. Dieser muss dan ein Reset geschickt.
Bis dahin können 10 Frames geschickt werden -> 15 kb.

Geht aber nicht biem ersten Handschake, zuerst kriegt client ein cookie Welches mitgegeben wird und dann geht die TCP Fast open.

```
GET / HTTP/1.0
Key1: value1
Key2: value2
Key3: value3
  value 3 may continue here
key4: value4

```

- Each line should be terminated by CRLF but CR oder LF gehen auch. 
- The Header ends with an empty line by itself. 
- HTTP not max header lenght

### The HTTTP Methods

- HEAD
- PUT -> Führt es nur einmal durch (z.B. durch Cookie)
- POST -> Wiederholt on refresh
- OPTIONS
- DELETE
- PATCH
- TRACE
- CONNECT

### HTTP Responses

- Status code line (version, status code)
  - 1xx Informational
  - 2xx Succesfull
  - 3xx Redirection
  - 4xx Client Error
  - 5xx Internal Server Error

### HTTP / 1.1

Hat ein Host argument welches notwendig ist, da es möglich ist auf einer Maschine mehrer Webiste zu hosten (gleiche IP)
Hier bleibt die TCP Verbindung auch offen. (Keep-Alive)
```
GET / HTTP/1.1
host: grohoff.org
connection: close
```

Zum offen halten oder bei 1.0 
```

Connection: Keep-alive
```

pipelining ist hier auch möglich, was bei 1.0 nicht möglich war.

Ein Browser macht normalerweise mehrere Parelle TCP verbindungen auf, und macht über diese das Pipelining (HTTP Requests)

### HTTP 1.x Response Format

```
HTTP/1.1 200 OK
Server: some advertisment
Date: Sun, 31 Aug 1999 24:00:00 GMT
Content-Type: text/html
Content-Lenght: 11
Connection: close

Hello World
```

The Time is neccessary due to caching, (expiration time)

## C Commands to compile:

gcc -I$HOME/include -L$HOME/lib main.c -lmicrohttpd -o main
export LD_LIBRARY_PATH=$HOME/lib
