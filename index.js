
// Importando as bibliotecas
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Criando o servidor
const app = express();
app.use(express.json());


// Conectando ao MongoDB
const client = new MongoClient(process.env.MONGO_URI);
const alunos = client.db('escola').collection('alunos');

// CADASTRAR ALUNO
app.post('/alunos', async (req, res) => {
    const novoAluno = req.body;
    const resultado = await alunos.insertOne(novoAluno);
    res.status(201).json(resultado);
});
// LISTAR ALUNOS
app.get('/alunos', async (req, res) => {
    const listaAlunos = await alunos.find().toArray();
    res.json(listaAlunos);
});
// BUSCAR ALUNO PELO ID
app.get('/alunos/:id', async (req, res) => {
    const idAluno = new ObjectId(req.params.id);
    const aluno = await alunos.findOne({ _id: idAluno });
    res.json(aluno);
});
// ATUALIZAR ALUNO
app.put('/alunos/:id', async (req, res) => {
    const idAluno = new ObjectId(req.params.id);
    const atualizacao = await alunos.updateOne(
        { _id: idAluno },
        { $set: req.body }
    );    
    res.json(atualizacao);
});
// EXCLUIR ALUNO
app.delete('/alunos/:id', async (req, res) => {
    const idAluno = new ObjectId(req.params.id);
    const exclusao = await alunos.deleteOne({ _id: idAluno });
    res.json(exclusao);
});
// Iniciando o servidor
client.connect()
    .then(() => {
        console.log('CONECTADO AO MONGODB!');
        app.listen(3000, () => {
            console.log('SERVIDOR RODANDO NA PORTA 3000');
        });
    })
    .catch((erro) => {
        console.log('ERRO:', erro.message);
    });