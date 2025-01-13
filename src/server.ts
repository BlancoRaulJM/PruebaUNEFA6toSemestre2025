import express from "express";
import db from "./config/database";
import colors from "colors"
import cors from "cors";
import routerArticulos from "./route/rArticulos";

//Conectar a la Base de Datos Usando el ORM(Object/Relational Mapping) Sequelize
async function conectDBenRender() {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.black.bold.bgMagenta('Conexión exitosa a la Base de datos en la Nube Render .'));
    } catch (error) {
        console.log(colors.black.bold.bgMagenta(`Error conectando a la Base de Datos, Detalle:\n${error}`));
    } 
}
conectDBenRender();

const server = express();
server.use(cors({ origin: '*' }));
server.use(express.json());

server.use('/api/articulos', routerArticulos);

export default server;