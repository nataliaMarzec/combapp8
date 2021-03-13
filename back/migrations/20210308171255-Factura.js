"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Facturas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clienteId_factura: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Facturas",
          key: "id",
        },
      },
      fechaEmision: {
        type: Sequelize.DATE,
      },
      tipoComprobante: {
        type: Sequelize.STRING,
      },
      nroComprobante: {
        type: Sequelize.STRING,
      },
      ptoVenta: {
        type: Sequelize.STRING,
      },
      concepto: {
        type: Sequelize.STRING,
      },
      saldoCobrado: {
        type: Sequelize.BIGINT.UNSIGNED,
      },
      montoSinCobrar: {
        type: Sequelize.BIGINT.UNSIGNED,
      },
      importeTotal: {
        type: Sequelize.BIGINT.UNSIGNED,
      },
      cantidadArticulos: {
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
    await queryInterface.dropTable("Facturas");
  },
};
