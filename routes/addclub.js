var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');
//var jParser= bodyParser.json();
/* GET home page. */
router.get('/', function(req, res, next) {

var data=res.body;
console.log(data);
 res.send("hello");
 });
router.post('/',function(req, res, next) {
console.log("entered");
var data=req.body;
console.log(data);
var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
  db.bind('clubs');
  db.clubs.insert(data,function (err,docinserted) {
    console.log("123");
    if(err){
      console.log("error");
      throw err;
      }
      console.log(docinserted);
      return db.close();

 res.send(docinserted);
  })


 });


module.exports = router;
