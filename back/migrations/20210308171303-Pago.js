"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pagos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clienteId_pago: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Pagos",
          key: "id",
        },
      },
      fechaPago: DataTypes.DATE,
      importePago: DataTypes.BIGINT.UNSIGNED,

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Pagos");
  },
};
