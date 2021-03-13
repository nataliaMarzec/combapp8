"use strict";
const { Sequelize, Op, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Registro = sequelize.define(
    "Registro",
    {
      venta_cliente_id: DataTypes.INTEGER,
      cliente_venta_id: DataTypes.INTEGER,
      estado: DataTypes.STRING,
    },
    {}
  );

  Registro.associate = function (models) {
    
  };
  return Registro;
};
