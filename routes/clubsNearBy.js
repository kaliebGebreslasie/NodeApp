var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 console.log("hello");
  //console.log(req.query.lat);
db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});

  db.bind('clubs');
  console.log(req.query.long);
  db.clubs.find({location:{
$near:{$geometry:{type:"Point",coordinates:[parseFloat(req.query.long), parseFloat(req.query.lat)]},
$maxDistance:2000}}}).toArray(function(err,clubs){
  console.log(err);
res.send(clubs);
});
  
   
});
module.exports = router;
