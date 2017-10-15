echo -e 'HTTP/1.1 200 OK\r\nContent-type: application/json\r\nAccess-control-allow-origin: *\r\n$(date)\r\n\r\n{"foo":"bar"}' | nc -k -l 8080
