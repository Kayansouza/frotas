const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/clientesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definir o schema e o modelo do cliente
const clienteSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    dataCadastro: { type: Date, default: Date.now }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

// Rota para cadastrar um novo cliente
app.post('/clientes', async (req, res) => {
    try {
        const novoCliente = new Cliente(req.body);
        await novoCliente.save();
        res.status(201).send(novoCliente);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Rota para listar todos os clientes
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).send(clientes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});