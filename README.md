# RestAPI_SSL_101
RestAPI to resources - angular, express, node, SSL

Implemented on a windows system.

Hence, curl examples are modified for windows use.

based on:

http://thejackalofjavascript.com/architecting-a-restful-node-js-app/

with updates as in comments to remove security flaws in auth.js and validateRequest.js in the server folder

HTTPS

http://www.hacksparrow.com/express-js-https.html


the node_modules of the folder server and  ngClient are not uploaded.

These should be installed as described at:
http://thejackalofjavascript.com/architecting-a-restful-node-js-app/


 
 Also another major change is from line 35 of middlewares/validateRequest.js
 
 
 if ((req.url.indexOf('admin') >= 0 && dbUser.role == 'admin') || (req.url.indexOf('admin') < 0 && req.url.indexOf('/api/v1/') >= 0)) 
 
 Which appears to allow any authenticated user to access any route with:
 
 
 The code from lines 31..45 have been replaced with:
 
             if (dbUser) { // we have a user object now check if this is an admin route
									
								// two checks here, as we have an authenicated/authorised routes to protect
								// there 1 if the route is not admin, let them through to it 
								//       2 if admin route check if they are an admin
								
								// was the original code at the site wrong??? YES
								//console.log("role: " + dbUser.role);
                if (req.url.indexOf('admin') >= 0) // admin only route
								{
									console.log("admin required");
									
                   if  (dbUser.role == 'admin') 
									 {
										 next(); // To move to next middleware
									 }
								   else
									 {
                    res.status(403);
                    res.json({
                        "status": 403,
                        "message": "Not Authorized"
                    });
                    return;										 
									 }
								}
								else
        						if ( req.url.indexOf('/api/v1/') >= 0)
											{
                         next(); // To move to next middleware
											 
                } else {
											
                    res.status(403);
                    res.json({
                        "status": 403,
                        "message": "Not Authorized"
                    });
                    return;
                }
            } else {
 
 
 
 
   





