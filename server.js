const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const { measure } = require("react-native-reanimated");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async(req, res) =>{
    const{name, email, message} = req.body;

    const transporter = nodemailer.createTransport( {
        service:"gmail",
        auth: {
            user:"ypardhava1@gmail.com",
            pass:"Pardhav227@",
        }
    });


    const mailoptions = {
        from: email,
        to:"ypardhava1@gmail.com",
        subject:`Portfolio Contact from ${name}`,
        text: message
    };


    try{
        await transporter.sendMail(mailoptions);
        res.send({Status:"Message sent"});
    }catch(error){
        console.error(error);
        res.status(500).send({status:"Error",error});
    }
});

app.listen(3001, ()=>{
    console.log("Server running on port 3001");
});