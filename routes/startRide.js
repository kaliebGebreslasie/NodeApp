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
  var query={"clubname":data.clubname};
  db.clubs.find({"clubname":data.clubname}).toArray(function(err,docs){
    console.log("eintss");
if(err) console.log(err);
docs.forEach(function(doc){

//  console.log(doc.events);
  doc.events.forEach(function(event){
     if(event.eventname==data.eventname){
       
 //event.status="start";
 event['status'] =  "started" ;
 event['location']={type:"Point",coordinates:[]};
     event['location']['coordinates']=[data.lng,data.lat];
     }
  });
  console.log(doc.events);
  var operator1={$set:{"events":doc.events}};
db.clubs.update(query,operator1,function (err,numupdated){
  console.log("helllllll");
  if(err) console.log("errrrrr"+err);
  console.log("success"+numupdated)
 
  res.send(numupdated);
});


});

 });
//  console.log(doc);
// doc.each(function(err,event){
//   console.log(event);
//   if(event.eventname==data.eventname){
//     event.status="started";
//     event.location.coordinates=[data.lng,data.lat];
//   }
// })
//  var query={"clubname":data.clubname};
// // var operator1={$set:{"events.status":"started","events.location.coordinates":[data.lng,data.lat]}};
//  //var operator1={$set:{"events.status":"started","events.location.coordinates":[data.lng,data.lat]}};
//  var operator1={$set:{"events":doc.events}};
// //var operator2={'$push':{"clubs":data.clubname}};

// var flag={upsert:true};
// db.clubs.update(query,operator1,function (err,numupdated){
//   console.log("helllllll");
//   if(err) console.log("errrrrr"+err);
//   console.log("success"+numupdated)
 
//   res.send(numupdated);
// });
  
   
});
module.exports = router;
