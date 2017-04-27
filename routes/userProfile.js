var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

router.get('/', function(req, res, next) {

var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
console.log( req.query);
db.bind('members');
var query={members:{$in:["Henok Teferi","kalieb gebreslasie"]}}
//var query={"name":"kalieb gebreslasie"};
var operator={"picture":1,"_id":0,"email":1};
db.club.find(query,operator).toArray(function (err,data) {
//  console.log("123");
  if(err){
    console.log("error");
    throw err;
    }
    res.send(data);
    console.log(data[0].name);

});
   db.close();

 });
