'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CURSOS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CURSOS.init({
    NOME: DataTypes.STRING,
    ANO: DataTypes.STRING,
    NIVEL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CURSOS',
  });
  return CURSOS;
};