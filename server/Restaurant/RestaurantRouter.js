'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const RestaurantModel = require('./RestaurantEntity').RestaurantModel;
//const userCtrl = require('./userController');

router.post('/add', function(req, res){
	// logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
    let Restaurant = new RestaurantModel(req.body);
    Restaurant.save(function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'Restaurant saved successfully'});
    }
    });
  }
})

router.delete('/delete/:id', function(req, res){
  if(req.params.id)
  {
    let id = req.params.id;
    RestaurantModel.findByIdAndRemove(id, function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'Restaurant deleted successfully'});
    }
    });
  }
})


router.patch('/update/:id', function(req, res){
  if(req.params.id)
  {
    let id = req.params.id;
    RestaurantModel.findByIdAndUpdate(id,{$set:{comments:req.body.comments}},{new:true}, function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'comments updated successfully'});
    }
    });
  }
})


router.get('/', function(req, res) {
RestaurantModel.find({}, function(allrestaurant, err){
if(err){
  logger.debug("errors");
  res.send(err);
}
else{
  logger.debug("saved");
   res.json(allrestaurant);
}
});
})
module.exports = router;
