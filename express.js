const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000
const zod = require("zod")
app.use(express.json());
app.use(express.json());

function authentication(email,pass){
    const us =zod.string().email().safeParse(email).success;
    const pas = zod.string().min(8).safeParse(pass).success;
    console.log(us,pas);
    if(us == true && pas == true){
        return true;
    }else{
        return false
    }
  
}
app.post('/Login/index.html', (req, res) =>{
    const ussername = req.body.ussername;
    const password = req.body.password;
    if(authentication(ussername,password)){
        res.status(200);
    }else{
        return res.status(401).send("Autharixation error");
    }

})
app.listen(port,()=>{
  console.log("running");
})