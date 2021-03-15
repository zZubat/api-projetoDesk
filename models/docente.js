'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Docente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Docente.init({
    NOME: DataTypes.STRING,
    EMAIL: DataTypes.STRING,
    SENHA: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Docente',
  });
  return Docente;
};