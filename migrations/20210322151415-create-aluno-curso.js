'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AlunoCursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IDALUNO: {
        type: Sequelize.INTEGER,
        references: { model: 'ALUNOs', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      IDCURSO: {
        type: Sequelize.INTEGER,
        references: { model: 'CURSOS', key: 'id' },
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AlunoCursos');
  }
};