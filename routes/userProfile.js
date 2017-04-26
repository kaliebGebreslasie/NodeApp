// var express = require('express');
// var router = express.Router();
// var mongo=require('mongoskin');
//
// router.get('/', function(req, res, next) {
//
// var db=mongo.db("mongodb://localhost:27017/test",{native_parser:true});
// console.log( req.query.name);
// db.bind('members');
// var query={"name":"kalieb gebreslasie"};
// var operator={"picture":1,"_id":0,"email":1};
// db.club.findOne(query,operator,function (err,data) {
// //  console.log("123");
//   if(err){
//     console.log("error");
//     throw err;
//     }
//     console.log(data);
//     res.send("data");
//
//
// });
//
//    db.close();
//
//  });
