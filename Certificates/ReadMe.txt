maheshs-mbp-2:NodeJs-SSL maheshrajannan$ cd Certificates/
maheshs-mbp-2:Certificates maheshrajannan$ openssl genrsa -out sampleSSL-key.pem 1024
Generating RSA private key, 1024 bit long modulus
....++++++
.......++++++
e is 65537 (0x10001)
maheshs-mbp-2:Certificates maheshrajannan$  openssl req -new -key sampleSSL-key.pem -out certrequest.csr
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:IL
Locality Name (eg, city) []:Wheeling
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Self
Organizational Unit Name (eg, section) []:SelfLearning
Common Name (e.g. server FQDN or YOUR name) []:MaheshRajannan
Email Address []:mahesh.rajannan@gmail.com

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:ssl
string is too short, it needs to be at least 4 bytes long
A challenge password []:SampleSSL
An optional company name []:Self
maheshs-mbp-2:Certificates maheshrajannan$ vi ReadMe.txt
maheshs-mbp-2:Certificates maheshrajannan$ 

maheshs-mbp-2:Certificates maheshrajannan$  openssl x509 -req -in certrequest.csr -signkey sampleSSL-key.pem -out sampleSSL-cert.pem
Signature ok
subject=/C=US/ST=IL/L=Wheeling/O=Self/OU=SelfLearning/CN=MaheshRajannan/emailAddress=mahesh.rajannan@gmail.com
Getting Private key

