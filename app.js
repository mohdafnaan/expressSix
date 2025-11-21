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


app.post("/login",(req,res)=>{
    try {
        
        let userInput = req.body;
        res.status(200).json({msg : userInput})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : error})
    }
})

app.put ("/update",(req,res)=>{
    try {
        let userInput = req.body;
        let password = userInput.password;
        console.login(password);

        res.status(200).json({ msg : "password updated"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})


app.delete ("/delete",(req,res)=>{
    try {
        let userInput = req.body;
        let email = userInput.email;
        res.status(200).json({ msg : "user account delete "})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.listen(port,()=>{
    console.log(`server started http//localhost:${port}`);
})