"use strict";
const { Cliente } = require("../models/sequelizeConnection");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let ventas;
    let clientes = await Cliente.findAll();
    (ventas = [
      {
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
          fecha: new Date("<2020-10-3>"),
          tipoDePago: "efectivo",
          facturado: "si",
          importeTotal:"622",
          saldoCobrado: "522",
          montoSinCobrar: "100",
         

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
        {};
  
      ventas.forEach((cliente) => {
        clientes.push({
          clienteId_venta:"123",
          fecha: new Date("<2020-09-4>"),
          tipoDePago: "efectivo",
          facturado: "no",
          importeTotal: "200",
          saldoCobrado: "100",
          montoSinCobrar: "100",
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
  
      return queryInterface.bulkInsert("Ventas", ventas, {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("Ventas", null, {});
    },
  };
  
