import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import user from './User'
import user2 from './User2'

dotenv.config()


  const app = express()
  app.use(express.json());

app.use(cors({
    origin: '*'
}));

mongoose.set('strictQuery', false);
let x : string;
if (process.env.DB_URI) {
    x = process.env.DB_URI
  } else {
    throw new Error("WHATEVER environment variable is not set")
  }
mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("connected to mongodb");
});


app.get('/',(req,res)=>{
    res.send("server is working")
})

app.post('/auth',async (req,res)=>{

  console.log(req);
  

    await user.findOne({username: req.body.username}).then((currentUser)=>{
        if(currentUser)
        {
            //already have user in db
            //console.log(profile)
            console.log('user exists');
            res.send("user exists");
        }
        else
        {

          
             new user({
            username: req.body.username,
            regdno: req.body.regdno,
            type: "",
            score: 0,
            code: "",
            branch: req.body.branch,

          }).save().then((newUser)=>{
                //console.log(profile)
                console.log('new user created ');
              })

              res.send("all done");
          
        }
    })

})

app.post('/auth2',async (req,res)=>{

  console.log(req);
  

    await user2.findOne({username: req.body.username}).then((currentUser)=>{
        if(currentUser)
        {
            //already have user in db
            //console.log(profile)
            console.log('user exists');
            res.send("user exists");
        }
        else
        {

          
             new user2({
            username: req.body.username,
            regdno: req.body.regdno,
            type: "",
            score: 0,
            code: "",
            branch: req.body.branch,
            username2: req.body.username2,
            regdno2: req.body.regdno2,
            branch2: req.body.branch2
          }).save().then((newUser)=>{
                //console.log(profile)
                console.log('new user created ');
              })

              res.send("all done");
          
        }
    })

})

app.post('/getCode',async (req,res)=>{



        console.log(req.body.code);
        
        await user.updateOne(
          
            { "username" : req.body.username },
            { $set: { "code" : req.body.code } }
          
        );
        
    res.send("changed code")
    
})

app.listen(5000,()=>{
    console.log("server is running on 5000")
})