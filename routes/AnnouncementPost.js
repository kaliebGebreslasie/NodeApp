var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET users listing. */
router.post('/', function(req, res, next) {
var data=req.body;
var db=mongo.db("mongodb://localhost:27017/test",{native_parser:true});
db.bind('clubs');
var query={"clubname":data.clubname};
var operator={'$push':{"announcments":{'owner':data.name,'announcment':data.announcment}}};
db.clubs.update(query,operator,function (err,numupdated){
  if(err) throw err;
  console.log("success"+numupdated)
  return db.close();
});

//  res.send('respond with a resource');
});

module.exports = router;
