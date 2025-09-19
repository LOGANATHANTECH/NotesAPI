
// const bodyparser=require('body-parser');

// const express = require('express');
// const app= express();

// app.use("/login",bodyparser.urlencoded());

// app.use((req,res,next)=>{
//     console.log("second middileware");
//     next();

// });
// app.use((req,res)=>{
//     console.log("thired middileware");
//     res.send("<h1>express is running loganathan !</h1>");
//     // res.end();
// });

// app.post("/login",(req,res)=>{
//     const userdata=req.body
//     console.log(userdata.username);
//     console.log(
//         ...Object.keys(userdata),
//         Object.values(userdata)
//     );


//     res.send(`your login successfully ! `)
// });
// app.post("/sigin",(req,res)=>{
//     const userdata=req.body
//     console.log(userdata);
//     res.send(`your sigin successfully ! `)
// });
// app.get("/",(req,res)=>{
//     res.send(`<form action="/login" method="post"><input type="text" name="username" id=""><br><br><input type="text" name="password" id=""><br><br><button type="submit">login</button></form>`);
// });


// app.listen(3000);



const Express = require('express');
const app = Express();

const router = require("./routers/allApis");

app.use("/note",router);

app.get("/", (req, res) => {
    console.log("running");
    res.send("i am working");       
})

app.listen(3000);
