'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MENCAO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MENCAO.belongsToMany(models.ALUNO,{
        through: 'ALUNOMC',
        as: 'ALUNOMCs',
        foreignKey: 'IDMENCAO'
      });
    }
  };
  MENCAO.init({
    NOME: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MENCAO',
    freezeTableName: true,
  });
  return MENCAO;
};