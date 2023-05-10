let fs = require('fs');

// CRIAR ARQUIVO

fs.writeFile('teste.txt',"Qualquer texto para teste",(err) =>{
    if(err){
       throw err;
    }
    console.log('Arquivo criado com sucesso');
});

// ATUALIZAR ARQUIVO

// fs.appendFile('teste.txt'," - Atualização de texto",(err) =>{
//     if(err){
//        throw err;
//     }
//     console.log('Arquivo atualizado com sucesso');
// })

// DELETAR ARQUIVO

// fs.unlink('teste.txt',(err) =>{
//     if(err){
//        throw err;
//     }
//     console.log('Arquivo apagado com sucesso');
// })

// RENOMEAR ARQUIVO

// fs.rename('teste.txt',"novoNome.txt",(err) =>{
//     if(err){
//        throw err;
//     }
//     console.log('Arquivo renomeado com sucesso');
// })

// LER ARQUIVO

fs.readFile('novoNome.txt', 'UTF8',(err,data) =>{
    if(err){
       throw err;
    }
    console.log(data);
})

