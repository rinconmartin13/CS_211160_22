import pkg from 'pg';
import { Sequelize } from 'sequelize';
import { db } from '../config.js';

const {Pool} = pkg;

async function getConnection() {
    const client = new Pool({
        user: db.user,
        host: db.host,
        database: db.database,
        password: db.password,
        port: db.port,
    });
    await client.connect();
    return client;

}

const sequelizeClient = new Sequelize(db.database, db.user, db.password,{
    host: db.host,
    dialect: 'postgres'
})

sequelizeClient.authenticate()
.then(()=>{
    console.log('conectado')
})
.catch(()=>{
    console.log('no se conecto')
})

export const getData = {getConnection, sequelizeClient};
// export default { getConnection };