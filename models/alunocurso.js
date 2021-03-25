'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlunoCursoMencao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ALUNO.belongsToMany(models.CURSOS,{
        through: AlunoCursoMencao
      });
      models.CURSOS.belongsToMany(models.ALUNO,{
        through: AlunoCursoMencao
      });
    }
  };
  AlunoCursoMencao.init({
    IDMENCAO: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'AlunoCursoMencao',
    freezeTableName: true,
  });
  return AlunoCursoMencao;
};