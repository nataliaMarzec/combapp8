"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Ventas",
      [
        {
          nroVenta: 101,
          fecha: new Date("<2020-09-4>"),
          facturado: true,
          saldoCobrado: "100",
          montoSinCobrar: "100",
          tipoDePago: "efectivo",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nroVenta: 102,
          fecha: new Date("<2020-10-3>"),
          facturado: false,
          saldoCobrado: "522",
          montoSinCobrar: "100",
          tipoDePago: "efectivo",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Ventas", null, {});
  },
};
