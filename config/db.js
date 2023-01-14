import Sequelize from 'sequelize'; //instalada con el comando :   npm install mysql2 sequelize
import dotenv from 'dotenv/config';


console.log(process.env.DB_HOST);
//127.0.0.1
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    },
    operatorAliases:false
});

export default db;

/* 
    para subir el proyecto a github o a un hosting hay que usar variables d
    de entorno para no exponer informacion sensible

    para ellos instalamos dotenv
    npm install dotenv

*/