"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Cliente, Factura } = require("./sequelizeConnection");
module.exports = function (sequelize, DataTypes) {
  const Venta = sequelize.define(
    "Venta",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nroVenta: DataTypes.BIGINT.UNSIGNED,
      fecha: DataTypes.DATE,
      facturado: DataTypes.BOOLEAN,
      saldoCobrado: DataTypes.BIGINT.UNSIGNED,
      montoSinCobrar: DataTypes.BIGINT.UNSIGNED,
      tipoDePago: DataTypes.STRING,
      importeTotal: DataTypes.BIGINT.UNSIGNED,
    },

    {
      tableName: "Ventas",
      modelName: "Venta",
    }
  );

  return Venta;
};
