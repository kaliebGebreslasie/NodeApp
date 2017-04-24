var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 // console.log("hello");
  //console.log(req.query.lat);
db=mongo.db("mongodb://localhost:27017/test",{native_parser:true});
  db.bind('clubs');
  db.clubs.find(data,function (err,docinserted) {
    console.log("123");
    if(err){
      console.log("error");
      throw err;
      }
      console.log(docinserted);
      return db.close();

  })
  res.send(req.query);
});

module.exports = router;
