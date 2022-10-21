const { DataTypes } = require("sequelize");

const sequelize = require("../sequelizeConfig");

const Users = sequelize.define("usuarios", { 
    id: {
      type: DataTypes.INTEGER ,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,        
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

//create table if not exists...
const init = async () => {
  await Users.sync();
};

init();

module.exports = Users;