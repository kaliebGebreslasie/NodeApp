var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET users listing. *///retrive all events
router.get('/', function(req, res, next) {

var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
console.log( req.query.name);
db.bind('clubs');
var query={"memeber":req.query.name};
var operator={"events":1,"_id":0};
db.club.find(query,operator).toArray(function (err,data) {
//  console.log("123");
  if(err){
    console.log("error");
    throw err;
    }
    res.send(data);
    console.log(data[0].events);

});

   db.close();

 });

//////addd event
router.post('/', function(req, res, next) {
var data=req.body;

var db=mongo.db("mongodb://localhost:27017/test",{native_parser:true});
db.bind('clubs');
var query={"clubname":data.clubname};
var operator={'$push':{"events":{'owner':data.name,'event':data.event}}};
db.clubs.update(query,operator,function (err,numupdated){
  if(err) throw err;
  console.log("success"+numupdated)
  return db.close();
});

//  res.send('respond with a resource');
});

module.exports = router;
