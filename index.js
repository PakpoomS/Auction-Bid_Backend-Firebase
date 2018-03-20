const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

var db = admin.database(); /// set Database 


exports.SetData = functions.https.onRequest((req , res)=>{
    const test = req.query.text;
    return admin.database().ref('/Test').set({name1 : test}).then((snapshot)=>{
        return res.send(200,'Success');
    })
});

exports.GetData = functions.https.onRequest((req, res)=>{
  
    /*if(req.method == 'GET'){
        var ref = db.ref('/Test');
        ref.once('value',function(snapshot){
            res.contentType('application/json');
            res.send(JSON.stringify(snapshot.val()))
        });
    }*/
});

exports.GetTime = functions.https.onRequest((req , res)=>{
    const currentTime = new Date().getTime(); // check time database
    const date = new Date(currentTime);
    res.send(date.toString()); 
});