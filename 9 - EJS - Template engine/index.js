const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 8080;

let users = [{
    id: 0,
    name: "Andrey",
    phone:"(51) 22222-5555"
},{
    id: 2,
    name: "José",
    phone:"(51) 22222-5555"
},{
    id: 3,
    name: "Marcos",
    phone:"(51) 22222-5555"
}]

// CONFIGURA O LOCAL DAS VIEWS DO EJS E TAMBÉM QUAL
// TEMPLATE ENGINE ESTAMOS USANDO, QUE NO CASO É EJS

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");



app.get("/", (req,res) => {

    // RENDER BASICAMENTE RENDERIZA, CONFORME 
    // CONFIGURADO ACIMA, O ARQUIVO LOCALIZADO
    // NAS PASTAS CONFIGURADAS DO EJS NO APP.SET

    res.render('user',{users: users});
});

app.get("/about",(req,res) => {
    res.render('about');
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});