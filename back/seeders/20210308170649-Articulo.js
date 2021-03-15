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
          articuloId_venta:13,
          nombre: "caramelo",
          codigo: 123,
          descripcion: "dulce",
          precio: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articuloId_venta:14,
          nombre: "chocolate",
          codigo: 124,
          descripcion: "negro",
          precio: 220,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articuloId_venta:15,
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
