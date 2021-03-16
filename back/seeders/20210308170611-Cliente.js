"use strict";

const { Venta } = require("../models/sequelizeConnection");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let clientes;
    let ventas = await Venta.findAll();
    (clientes = [
      {
        cuit: "27350268263",
        nombre: "Brandon",
        apellido: "Adam",
        razonSocial: "developer",
        telefono: "2478302010",
        email: "b_adam@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuit: "27308887773",
        nombre: "Samira",
        apellido: "Stone",
        razonSocial: "estudiante",
        telefono: "2478101010",
        email: "samirastone@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuit: "23308887771",
        nombre: "Diego",
        apellido: "Lopez",
        razonSocial: "comerciante",
        telefono: "2478123456",
        email: "diegolopez@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
      {};

    clientes.forEach((cliente) => {
      ventas.push({
        nroVenta: 101,
        fecha: new Date("<2020-09-4>"),
        tipoDePago: "efectivo",
        facturado: "no",
        importeTotal: "200",
        saldoCobrado: "100",
        montoSinCobrar: "100",
        ventaId_cliente: " ventaId_cliente",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    return queryInterface.bulkInsert("Clientes", clientes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};
