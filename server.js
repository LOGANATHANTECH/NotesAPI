const Express = require('express');
const app = Express();

const router = require("./routers/allApis");

app.use("/note",router);

app.get("/", (req, res) => {
    console.log("running");
    res.send("i am working");
})

app.listen(3000);
