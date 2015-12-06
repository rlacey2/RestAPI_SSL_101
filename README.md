# RestAPI_SSL_101

RestAPI to resources - angular, express, node, SSL

based on: 

http://thejackalofjavascript.com/architecting-a-restful-node-js-app/

with updates as in comments to remove security flaws in auth.js in the server folder

HTTPS implmented rather than HTTP, 

Follow the steps from:
http://www.hacksparrow.com/express-js-https.html

You may get a browser warning initially on the https usage due to the nature of the certificate, proceed to accept the route(s).


port 3443  = server with REST routes

port 2772   = client of the routes = localhost:2772/#/login
started with gulp in the ngClient folder once steps followed in tutorial


Implemented on a windows system.

Hence, curl examples are modified for windows use.


Please note the following folders are not pushed to the repo  

server\node_module
ngClient\node_module

Hence, they need to be rebuilt after installing the repo

Open a cmd window at the folder server and run the following command:

			npm install --save  
		 
		 
To run the server on port 3443: 

			node server.js or nodemon server.js  (if nodemon installed)
			
			In your browser enter https://localhost:3443/test to test the server is running.
			


Open a cmd window at the folder ngClient and run the following command:

     npm install --save  
		 
To run the client on port 2772, type at the command prompt in ngClient:

	   gulp

		 enter http://localhost:2772/#/login in a browser to test the client
		 
		 
		 
 



 
Some other changes:

Server/ssl contains test ssl files only - DO NOT use in a live system.

Taking the username rather than user from the decoded token for validation.

Change the sample username to rlacey2@example.com, as an admin.

Optimised the logic around line 35 of middlewares/validateRequest.js using:

var isAdminRoute = req.url.indexOf('admin') >= 0 ? true : false; to replace two index calls with isAdminRoute and ! isAdminRoute


Various console.log statements added to files, remove later.

Added a user rlacey1@example.com (not admin) with password pass123

 
Removed bower and its postinstall step from the package.json in ngClient, saving 4000+ files

ngClient\package.json was

//////////
{
  "name": "securerestapi01",
  "version": "0.1.0",
  "dependencies": {
    "bower": "^1.3.9",
    "gulp": "^3.8.7",
    "gulp-connect": "^2.0.6"
  },
  "scripts": {
    "postinstall": "node node_modules/bower/bin/bower install"
  }
}
//////////



CURL Scripts in  \private\curl_scripts

rlacey2@example.com is an admin

run login2.bat to get a session token

paste the token into returned into adminAllUsers2.bat and run, you should see a json list of users.
This is correct as the user is an admin.


rlacey1@example.com is an ordinary user

paste the token into returned into adminAllUsers1.bat and run, you should see an error message
This is correct as the user is an ordinary user with not authorisation on the route.


Edit server/routes/auth.js and change the rlacey2@example.com role to user, 
then run login in again to get a new session token and paste to to adminAllUsers and run again.
You should not see the list this time.

https://localhost:3443/api/v1/admin/users





 
 
 
 
 
 
   





