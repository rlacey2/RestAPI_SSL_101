var jwt = require('jwt-simple');
var auth = {
        login: function(req, res) {
console.log("^^^^^^^^^^login");	
console.log("need to store the token in db, if going to invalidate/recall later"); //		
	
            var username = req.body.username || '';
            var password = req.body.password || '';
            if (username == '' || password == '') {
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
                return;
            }
            // Fire a query to your DB and check if the credentials are valid
						
						
            var dbUserObj = auth.validate(username, password);
            if (!dbUserObj) { // If authentication fails, we send a 401 back
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
                return;
            }
            if (dbUserObj) {
                // If authentication is success, we will generate a token
                // and dispatch it to the client
                res.json(genToken(dbUserObj));
            }
        },
        validate: function(username, password) {
					
            // spoofing the DB response for simplicity
						// console.log("database call required to validate user");
						
						if (username === 'rlacey2@example.com' && password === 'pass123')
						{
            var dbUserObj = { // spoofing a userobject from the DB. 
                name: 'rlacey2',
                role: 'admin',
                username: 'rlacey2@example.com'
            };
            return dbUserObj;
					  }
						else{
							return null;
						}
        },
        validateUser: function(username) {
            // spoofing the DB response for simplicity
            var dbUserObj = { // spoofing a userobject from the DB. 
                name: 'rlacey2',
                role: 'admin',   // change this role to test admin api i.e. invalidate
                username: 'rlacey2@example.com'
            };
            return dbUserObj;
        },
    }
    // private method
function genToken(user) {
    var expires = expiresIn(7); // 7 days
		
		// 2nd parameter is the token
    var token = jwt.encode({
        exp: expires,
				user: user                // added for better security
    }, require('../config/secret')());
		
    return {
        token: token,
        expires: expires,
        user: user
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}
module.exports = auth;