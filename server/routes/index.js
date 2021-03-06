var express = require('express');
var router = express.Router();
var auth = require('./auth.js');
var products = require('./products.js');
var user = require('./users.js');
/*
* Routes that can be accessed by any one
*/
router.post('/login', auth.login);
router.get('/test', function(req,res) { res.send("<h1>Test Response</h1>");} );
/*
* Routes that can be accessed only by authenticated users
*/
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/product/:id', products.getOne);
router.post('/api/v1/product/', products.create);
router.put('/api/v1/product/:id', products.update);
router.delete('/api/v1/product/:id', products.delete);
/*
* Routes that can be accessed only by authenticated & authorized users
*/
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);


router.get('/', function(req, res) {
	console.log(__dirname);
	console.log(path.join(__dirname + '/../../ngClient/index.html'));
    res.sendFile(path.join(__dirname + '/../../ngClient/index.html'));
});

module.exports = router; 