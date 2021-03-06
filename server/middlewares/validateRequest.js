var jwt = require('jwt-simple');
var validateUser = require('../routes/auth').validateUser;

module.exports = function(req, res, next) {
    // When performing a cross domain request, you will receive
    // a preflighted request first. This is to check if our the app
    // is safe. 
    // We skip the token outh for [OPTIONS] requests.
    //if(req.method == 'OPTIONS') next();

    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
   // var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];
		
console.log("********* validateRequests *******");	
console.log("check if the token has been revoked");		
console.log(token);		
	
console.log("*********************************");		
   // if (token || key) {
    if (token) {	// key is now encoded in token	and is decoded.user.name below	
        try {
				 
            var decoded = jwt.decode(token, require('../config/secret.js')());
	console.log(decoded);								
						
            if (decoded.exp <= Date.now()) {
                res.status(400);
                res.json({
                    "status": 400,
                    "message": "Token Expired"
                });
                return;
            }
						
            // Authorize the user to see if s/he can access our resources
            var dbUser = validateUser(decoded.user.username); // The key would be the logged in user's username
						 
            if (dbUser) {
							var isAdminRoute = req.url.indexOf('admin') >= 0 ? true : false;
							console.log("admin route  = " + isAdminRoute);
							console.log("route        = " + req.url);
							console.log("role         = " + dbUser.role);
									
                if ((isAdminRoute && dbUser.role == 'admin') ||
        								( ! isAdminRoute  && req.url.indexOf('/api/v1/') >= 0)) {

										
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
								
                // No user with this name exists, respond back with a 401
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid User"
                });
                return;
            }
        } catch (err) {
            res.status(500);
            res.json({
                "status": 500,
                "message": "Oops something went wrong",
                "error": err
            });
        }
    } else {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid Token or Key"
        });
        return;
    }
};