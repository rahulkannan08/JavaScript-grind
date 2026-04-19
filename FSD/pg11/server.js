const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const User = require("./models/User");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("MongoDB Connected"));

app.get("/", (req,res)=>{
    res.redirect("/signup");
});

app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/signup.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/login.html"));
});

app.get("/dashboard",(req,res)=>{
    if(req.cookies.user){
        res.sendFile(path.join(__dirname,"public/dashboard.html"));
    }
    else{
        res.redirect("/login");
    }
});

app.post("/signup", async (req,res)=>{
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    await user.save();
    res.redirect("/login");
});

app.post("/login", async (req,res)=>{
    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password
    });
    if(user){
        res.cookie("user",user.username);
        res.redirect("/dashboard");
    }
    else{
        res.send("Invalid Login");
    }
});

app.get("/me",(req,res)=>{
    res.json({username:req.cookies.user});
});

app.get("/logout",(req,res)=>{

    res.clearCookie("user");
    res.redirect("/login");
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

//  npm install express mongoose cookie-parser