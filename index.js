const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log("server is working");
})

app.get("/",(req,res)=>{
    res.send("working");
})

app.get("/form",(req,res)=>{
res.render("vie.ejs");
})

app.post("/form",(req,res)=>{
    let{user,password}=req.body;
    console.log(req.body);
    res.render("res.ejs",{user,password});
})