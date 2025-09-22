const Express = require('express');
const CustomError = require('./utils/CustomError')
const errorHandlingController= require("./controllers/ErrorHandlingController")


const app = Express();

const router = require("./controllers/RouterControllers");

app.use("/note",router);

app.get("/", (req, res) => {
    console.log("running");
    res.send("i am working");
})
app.use('/{*splat}',(req,res,next)=>{
    const err = new CustomError("no endpoint found",404);
    next(err);
    
})
app.use(errorHandlingController);
app.listen(3000);
