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
      ventaId_articulo: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Ventas",
          key: "id",
        },
      },
      facturaId_articulo: {
        tyepe: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Articulos",
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
