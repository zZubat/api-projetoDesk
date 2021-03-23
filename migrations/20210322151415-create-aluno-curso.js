'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AlunoCursoMencao', {
      ALUNOId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'ALUNO', key: 'id' },
      },
      CURSOSId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'CURSOS', key: 'id' },
      },
      IDMENCAO: {
        type: Sequelize.INTEGER,
        references: { model: 'MENCAO', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    return queryInterface.addConstraint('AlunoCursoMencao', ['ALUNOId', 'CURSOSId'], {
      type: 'primary key',
      name: 'pk_AlunoCursoMencao'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AlunoCursoMencao');
  }
};