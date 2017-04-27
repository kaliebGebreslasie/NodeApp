var express = require('express');
var router = express.Router();
 var mongo=require('mongoskin');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});
  db.bind('clubs')
  name=req.query.name
  var query={"memeber":name};
  db.clubs.find(query).toArray(function (err,data) {
  //  console.log("123");
    if(err){
      console.log("error");
      throw err;
      }
      console.log(data);
      res.send(data);

  });
});

module.exports = router;
