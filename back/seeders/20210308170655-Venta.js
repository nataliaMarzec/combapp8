"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Ventas",
      [
        {
          nroVenta: 101,
          fecha: new Date("<2020-09-4>"),
          tipoDePago: "efectivo",
          facturado: "no",
          importeTotal:"200",
          saldoCobrado: "100",
          montoSinCobrar: "100",
         

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nroVenta: 102,
          fecha: new Date("<2020-10-3>"),
          tipoDePago: "efectivo",
          facturado: "si",
          importeTotal:"622",
          saldoCobrado: "522",
          montoSinCobrar: "100",
         

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
