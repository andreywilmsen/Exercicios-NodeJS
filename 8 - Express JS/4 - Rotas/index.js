const express = require('express');
const app = express();
const PORT = 8080;
const aluno = require('./routes/aluno')

app.use("/", express.urlencoded({ extended: true }));
app.use("/aluno",aluno);
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})