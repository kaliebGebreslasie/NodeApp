var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log("hello");
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 console.log("hello");
  //console.log(req.query.lat);
db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});

  db.bind('clubs');
  console.log(req.query);
  data=req.query;
 var query={$and:[{"memeber":data.memberName},{"events.members":data.memberName},{"events.status":"started"},
{"events.location":{
$near:{$geometry:{type:"Point",coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
$maxDistance:200000}}

}]};
 //var operator1={$set:{"email":data.email,"picture":data.picture},"$addToSet":{"clubs":data.clubname}};
//var operator2={'$push':{"clubs":data.clubname}};

var flag={upsert:true};
db.clubs.find(query).toArray(function (err,docs){
  console.log("helllllll");
  if(err) console.log("errrrrr"+err);
  console.log("success"+docs)
 
  res.send(docs);
});
  
   
});
module.exports = router;
