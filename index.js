require('dotenv').config();
//inportando a biblioteca dotenv auxilia na leitura de arquivos
//para controle de variaveis de ambiente 
const express = require('express');
//instancia configura permissoes navegadores para codigo javascript
const cors = require('cors');
//modulo (arquivo js) que contem as rotas (enderecos) para requisicoes 
const apiRoutes = require('./src/routes');
const mongodb = require('./src/database/mongodb');
 
mongodb();
 
const server = express();
 
server.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'UPDATE', 'PATCH'],
        allowedHeaders: ['Content-Type']
    }
));
//servidor esta injetando o uso do cors permitindo acesso de qualquer origem e especificando
//os metodos de requisicoes permitidos
server.use(express.json());
server.use(express.urlencoded({extended: true}));
//fazer uso do json no formato das requisicoes
 
server.use('/', apiRoutes);
//definindo o uso das rotas no servidor exepress
 
server.listen(process.env.PORT, () => {
    console.log(`- Rodando na porta:  ${process.env.PORT}.`);
});//criando uma porta