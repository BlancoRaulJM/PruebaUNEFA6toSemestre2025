import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();
const urldb = process.env.STRING_CONEX_DB;
const db = new Sequelize(urldb,
    { 
        models: [__dirname + '/../model/**/*'],
        logging: false,
        dialectOptions: {
            ssl: {require:'true'}
        }
});

export default db;