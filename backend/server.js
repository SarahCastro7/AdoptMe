const express = require('express');
const {Pool} = require('pg');
const bcrypt = require('pg');
const cors = require('cors');

import {animalRoutes} from '../backend/routes/animalRoutes.js'

// DB_HOST=localhost        nosso .env !!
// DB_USER=postgres
// DB_PASSWORD=senai
// DB_NAME=AdoptMe
// DB_PORT=5432

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'AdoptMe',
    password: 'senai',
    port: 5432
});

//aqui fica a rota de login

app.post('/usuarios', async (req, res) =>{
    const {uname, psw} = req.body; 

    if (!uname || !psw) {
        return res.status(400).json({ error: 'Nome de usuário e senha são obrigatórios' });
    }

    try {
        const result =await pool.query(
            'SELECT * FROM usuarios WHERE uname = $1', 
            [uname]);
       if (result.rows.length === 0) {
            return res.status(401).json({ error: 'usuario não encontrado' });
        }
        const usuario = result.rows[0];
        //p comparar a senha
        const senhaValid = await bcrypt.compare(psw, usuario.psw);
        if (!senhaValid) {
            return res.status(401).json({ error: 'senha errada!' });
        }
    }
    catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }   
});