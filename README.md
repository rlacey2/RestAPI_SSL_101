# RestAPI_SSL_101
RestAPI to resources - angular, express, node, SSL

port 3443  = server with REST routes

port 2772   = client of the routes = localhost:2772/#/login
started with gulp in the ngClient folder once steps followed in tutorial


Implemented on a windows system.

Hence, curl examples are modified for windows use.

based on: 

http://thejackalofjavascript.com/architecting-a-restful-node-js-app/

with updates as in comments to remove security flaws in auth.js in the server folder

HTTPS implmented rather than HTTP, 

Follow the steps from:
http://www.hacksparrow.com/express-js-https.html


and then paste the corresponding code from this project over the relevant file.
Or download this project and install via npm/slush as required.


The node_modules of the folder server and  ngClient are not uploaded
These should be installed as described at:
http://thejackalofjavascript.com/architecting-a-restful-node-js-app/


The package.json is available in each folder to use npm update


server/ssl contains test ssl files only - DO NOT use in a live system.


server.js has been changed to allow for HTTPS on port 3443


taking the username rather than user from the decoded token for validation


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


optimised the logic around line 35 of middlewares/validateRequest.js using

var isAdminRoute = req.url.indexOf('admin') >= 0 ? true : false; to replace two index calls with isAdminRoute and ! isAdminRoute


various console.log statements added to files, remove later.

added a user rlacey1@example.com (not admin) with password pass123




 
 
 
 
 
 
   





