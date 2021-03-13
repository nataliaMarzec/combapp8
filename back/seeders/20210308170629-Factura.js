"use strict";

const { Articulo } = require("../models/sequelizeConnection");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let facturas;
    let articulos = await Articulo.findAll();
    (facturas = [
      {
        fechaEmision: new Date(),
        tipoComprobante: "Cfinal",
        nroComprobante: "1199",
        ptoVenta: "Sarmiento",
        concepto: "RI",
        importeTotal: "145",
        saldoCobrado: "100",
        montoSinCobrar: "45",
        cantidadArticulos: "4",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fechaEmision: new Date(),
        tipoComprobante: "CFinal",
        nroComprobante: "1200",
        ptoVenta: "Sarmiento",
        concepto: "RI",
        importeTotal: "216",
        saldoCobrado: "100",
        montoSinCobrar: "16",
        cantidadArticulos: "3",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fechaEmision: new Date(),
        tipoComprobante: "CFinal",
        nroComprobante: "1201",
        ptoVenta: "Sarmiento",
        concepto: "RI",
        importeTotal: "1000",
        saldoCobrado: "1000",
        montoSinCobrar: "0",
        cantidadArticulos: "5",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
      {};

    facturas.forEach((factura) => {
      articulos.push({
        nombre: "chocolate",
        codigo: 124,
        descripcion: "negro",
        precio: 220,
        facturaId_articulo: "facturaId_articulo",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    return queryInterface.bulkInsert("Facturas", facturas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Facturas", null, {});
  },
};
