"use strict";
const { Sequelize, Op, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const RegistroVentas = sequelize.define(
    "RegistroVentas",
    {
      clienteId_venta: DataTypes.INTEGER,
      ventaId_cliente: DataTypes.INTEGER,
      estado: DataTypes.STRING,
    },
    {}
  );

  RegistroVentas.associate = function (models) {
    
  };
  return RegistroVentas;
};
