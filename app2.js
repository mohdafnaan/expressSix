import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/",(req,res)=>{
    try {
        res.status(200).json({ msg : "localhost server"})
        
    } catch (error) {
        console.log(error);
        res.status(500).josn({msg : error})
    }


})

// there are 3 ways of giving data 
// 1. req.body 
// 2. req.params
// 3. req.query

//   1. req.body:
app.post("/login",(req,res)=>{
    try {
        
        let userInput = req.body;
        res.status(200).json({msg : userInput})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : error})
    }
})


//    2. req.params
app.post("/students/:roll",(req,res)=>{
    try {

        let rollNumber = req.params.roll
        console.log(rollNumber);

        res.status(200).json({msg : `this api belongs to roll no : ${rollNumber} `})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})


//     3.req.query ==> data will be send via key value pair.
app.post("/user", (req,res)=>{
    try {
        let data = req.query;
        let myName = req.query.fname;
        let age = req.query.age;
        let isAlive = req.query.isAlive;

        console.log(myName,age,isAlive);

        res.status(200).json({ msg :data })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : error})
    }
})
app.listen(port,()=>{
    console.log(`server started http//localhost:${port}`);
})