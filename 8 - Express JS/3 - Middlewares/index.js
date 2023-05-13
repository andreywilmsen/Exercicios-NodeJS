const express = require('express');
const app = express();
const PORT =  8080;

let consoleBody = (req,res,next)=>{
    console.log(req.body);
    next();
}

let hello = (req,res)=>{
    res.send("Hello world");
}

app.use('/',express.json(),consoleBody)
app.get('/', hello);
app.post('/',hello)



app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})