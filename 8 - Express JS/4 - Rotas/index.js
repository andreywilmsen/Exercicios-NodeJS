const express = require('express');
const app = express();
const PORT = 8080;

let alunos = [{ id: 0, nome: "Jose" },
{ id: 1, nome: "Maria" },
{ id: 2, nome: "Joao" },
{ id: 3, nome: "Marcos" }]

app.use("/", express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos));
})

app.get("/aluno", (req, res) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    res.json(aluno);
})
app.get("/aluno/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    res.json(aluno);
})



app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})