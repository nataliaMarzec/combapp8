"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Venta, Cliente, Articulo } = require("./sequelizeConnection");

module.exports = function (sequelize, DataTypes) {
  const Factura = sequelize.define(
    "Factura",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fechaEmision: DataTypes.DATE,
      tipoComprobante: DataTypes.STRING,
      nroComprobante: DataTypes.STRING,
      ptoVenta: DataTypes.STRING,
      concepto:DataTypes.STRING,
      importeTotal:DataTypes.BIGINT.UNSIGNED,
      saldoCobrado: DataTypes.BIGINT.UNSIGNED,
      montoSinCobrar: DataTypes.BIGINT.UNSIGNED,
      cantidadArticulos:DataTypes.BIGINT.UNSIGNED,
    },

    {
      tableName: "Facturas",
      modelName: "Factura",
    }
  );

  Factura.associate = (models) => {
    Factura.hasMany(Articulo, {
      foreignKey: {
        name: "articulo_id",
        allowNull: true,
      },
      as: "Articulo",
    });
  };

  return Factura;
};
