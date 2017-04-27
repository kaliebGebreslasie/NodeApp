var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');
//var jParser= bodyParser.json();
/* GET home page. */

router.get('/', function(req, res, next) {

var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
console.log( req.query.name);
db.bind('clubs');
var query={"clubname":req.query.name};
//var operator={"events":1,"_id":0};
db.clubs.findOne(query,function (err,data) {
//  console.log("123");
  if(err){
    console.log("error");
    throw err;
    }
    console.log(data.clubname);
    res.send(data);


});

   db.close();

 });
/////this events name should be changed to club

router.post('/',function(req, res, next) {
console.log("entered");
var data=req.body;
//console.log(data);
var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
  db.bind('clubs');
  db.clubs.insert(data,function (err,docinserted) {
  //  console.log("123");
    if(err){
      console.log("error");
      throw err;
      }
      console.log(docinserted);
      console.log("succed");
      return db.close();

  })
 res.send("hello");
 });


module.exports = router;
