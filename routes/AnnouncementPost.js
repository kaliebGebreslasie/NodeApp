var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET users listing. */
router.get('/', function(req, res, next) {
var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
console.log( req.query.name);
db.bind('clubs');
var query={"memeber":req.query.name};
var operator={"announcments":1,"_id":0};
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
res.send("data");
 });

/////////////////////////////////////////////////////////////////////////////////
router.post('/', function(req, res, next) {
var data=req.body;
var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
db.bind('clubs');
var query={"clubname":data.clubname};
var operator={'$push':{"announcments":{'owner':data.owner,'announcment':data.announcment}}};
db.clubs.update(query,operator,function (err,numupdated){
  if(err) throw err;
  console.log("success"+numupdated)
  res.send(numupdated)
  return db.close();
});

//  res.send('respond with a resource');
});

module.exports = router;
