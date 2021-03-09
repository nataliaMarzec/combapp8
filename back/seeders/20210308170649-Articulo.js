"use strict";

const {
  Venta,
  Cliente,
  Articulo,
  Factura,
} = require("../models/sequelizeConnection");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Articulos",
      [
        {
          nombre: "caramelo",
          codigo: 123,
          descripcion: "dulce",
          precio: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "chocolate",
          codigo: 124,
          descripcion: "negro",
          precio: 220,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "gaseosa",
          codigo: 125,
          descripcion: "naranja",
          precio: 215,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Articulos", null, {});
  },
};
