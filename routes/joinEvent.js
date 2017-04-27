var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello");
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 console.log("hello");
  //console.log(req.query.lat);
db=mongo.db("mongodb://localhost:27017/cycling",{native_parser:true});

  db.bind('clubs');
  console.log(req.body);
  data=req.body;
 var query={$and:[{"clubname":data.clubname}]};
// var operator1={$addToSet:{"events.members":data.member}};
//var operator2={'$push':{"clubs":data.clubname}};

var flag={upsert:true};

db.clubs.find(query).toArray(function(err,docs){
docs.forEach(function(doc){
  doc.events.forEach(function(event){
     if(event.eventname==data.eventname){
       console.log("index"+(event.members).indexOf( data.member));
 //event.status="start";
 if ((event.members).indexOf( data.member) ==-1) {
    event.members.push(data.member);
}
 
     }
  });
  var operator1={$set:{"events":doc.events}};
db.clubs.update(query,operator1,function (err,numupdated){
  console.log("helllllll");
  if(err) console.log("errrrrr"+err);
  console.log("success"+numupdated)
  });

})

});


 
 
 

  
   
});
module.exports = router;
