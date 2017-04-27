var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
  console.log("state");
  console.log( req.body+" this is from user server");
  db.bind('members');
  var query={name:{$in:["Henok Teferi","kalieb gebreslasie"]}}
  var operator={"picture":1,"_id":0,"email":1,"name":1};
  db.members.find(query,operator).toArray(function (err,data) {
  //  console.log("123");
    if(err){
      console.log("error");
      throw err;
      }
      console.log(data[0].name);
      res.send(data);


  });
     db.close();

});

module.exports = router;
