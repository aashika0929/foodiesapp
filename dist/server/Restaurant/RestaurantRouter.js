'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');

router.post('/add', function(req, res) {
    logger.debug("add router");
    let user = req.body.name;
    if(isNaN(user)){
    res.send(user);
  }
});

router.delete('/delete', function(req, res) {
    logger.debug("delete router");
    let user = req.body.id;
    res.send('delete ' + user);
});

router.put('/update', function(req, res) {
    logger.debug("update router");
    let user = req.body.food;
    if(typeof user == 'string')
    res.send('food is '+ user);
    else {
      res.send("no comments");
    }
});

// Get details of all user in the system
router.get('/message', function(req, res) {
  //console.log('Inside get');
  res.send('response from user GET route check');
});

module.exports = router;
