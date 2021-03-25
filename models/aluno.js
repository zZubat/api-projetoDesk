'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ALUNO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ALUNO.belongsToMany(models.CURSOS,{
        through: 'AlunoCursoMencao',
        as: 'CURSOSs',
        foreignKey: 'IDALUNO'
      });
    }
  };
  ALUNO.init({
    NOME: DataTypes.STRING,
    SOBRENOME: DataTypes.STRING,
    ENDEREÇO: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ALUNO',
    freezeTableName: true,
  });
  return ALUNO;
};