import {Sequelize}  from 'sequelize';
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(process.env.CON_STRING)
export default sequelize;