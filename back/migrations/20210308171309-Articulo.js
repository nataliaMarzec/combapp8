"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Articulos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      articuloId_venta: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Ventas",
          key: "id",
        },
      },
      articuloId_factura:{
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Facturas",
          key: "id",
        },
      },
      nombre: {
        type: Sequelize.STRING,
      },
      codigo: {
        type: Sequelize.INTEGER,
      },
      descripcion: {
        type: Sequelize.STRING,
      },
      precio: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Articulos");
  },
};
