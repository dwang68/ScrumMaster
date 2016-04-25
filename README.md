//Scrum Master










//Create self signed SSL certificate
From El Capitan, Mac is rootless, and the openssl.cnf is marked as restricted file. I copied the file over to ~/Documents and changed the file permission to use it.

1. Change the directory in openssl.cnf

2. Create Certificate Authority

openssl req -new -x509 -sha256 -newkey rsa:2048 -keyout private/cakey.pem -out cacertificate.pem -days 3650

The pem PASS phrase is: ScrumMaster



3. Create Certificate and certificate signing request

openssl req -new -nodes -newkey rsa:2048 -keyout private/scrummaster.key -out req/scrummaster.req -days 1095


4. Get your certificate signed by Certificate Authority

openssl ca -config /Users/dalin.wang/Documents/OpenSSL/openssl.cnf -policy policy_anything -out certs/scrummaster.pem -in req/scrummaster.req



httpsCredentials (optional) if specified, indicates the simulator should listen for WebSocket connections over HTTPS as well as over HTTP. The HTTPS port for each simulated player is that player's HTTP port plus 443. For example, for the HTTP port is 3000, and the HTTPS port is 3443. If httpsCredentials is specified, it must have the following properties:
keyFile is the path to the private key to use for the HTTPS server.
certFile is the path to the certificate to use for the HTTPS server. If either file cannot be read, the simulator will exit