import Sequelize from 'sequelize';
import sequelize from "../utils/db";
const todo = sequelize.define(
  'todo',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    task:{
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt:{
      type: Sequelize.DATE,
      defaultValue: Date.now()
    }
  },{
    tableName: 'todo'
  }
)

export default todo;