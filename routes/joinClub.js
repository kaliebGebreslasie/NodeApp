var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello");
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 console.log("hello");
  //console.log(req.query.lat);
db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});

  db.bind('members');
  console.log(req.body);
  data=req.body;
 var query={"name":data.name};
 var operator1={$set:{"email":data.email,"picture":data.picture},"$addToSet":{"clubs":data.clubname}};
var operator2={'$push':{"clubs":data.clubname}};

var flag={upsert:true};
db.members.update(query,operator1,flag,function (err,numupdated){
  console.log("helllllll");
  if(err) console.log("errrrrr"+err);
  console.log("success"+numupdated)
 
  res.send(numupdated);
});
  
   
});
module.exports = router;
