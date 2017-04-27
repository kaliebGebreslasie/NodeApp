// var express = require('express');
// var router = express.Router();
 var mongo=require('mongoskin');
// //var jParser= bodyParser.json();
// /* GET home page. */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  
});

router.post('/', function(req, res, next) {
var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
db.bind('clubs')
console.log(req.body+" zzzzzz");
var query={"memeber":name};
db.club.find(query).toArray(function (err,data) {
//  console.log("123");
  if(err){
    console.log("error");
    throw err;
    }
    res.send(data);
    console.log(data);

});

   db.close();
 });

module.exports = router;
