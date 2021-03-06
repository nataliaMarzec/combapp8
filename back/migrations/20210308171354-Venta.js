"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Ventas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clienteId_venta: {
        foreingkey: true,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Ventas",
          key: "id",
        },
      },
      fecha: {
        type: Sequelize.DATE,
      },
      tipoDePago: {
        type: Sequelize.STRING,
      },
      facturado: {
        type: Sequelize.STRING,
      },
      importeTotal: {
        type: Sequelize.BIGINT.UNSIGNED,
      },
      saldoCobrado: {
        type: Sequelize.BIGINT.UNSIGNED,
      },
      montoSinCobrar: {
        type: Sequelize.BIGINT.UNSIGNED,
      },

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
    await queryInterface.dropTable("Ventas");
  },
};
