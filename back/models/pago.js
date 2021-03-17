"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Venta, Factura,Cliente } = require("./sequelizeConnection");
module.exports = function (sequelize, DataTypes) {
  const Pago = sequelize.define(
    "Pago",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      clienteId_pago:{
        foreignKey:true,
        type:DataTypes.INTEGER,
      },
      fechaPago: DataTypes.DATE,
      importePago: DataTypes.BIGINT.UNSIGNED,
    },
    {
      tableName: "Pagos",
      modelName: "Pago",
    }
    );
  
    Pago.associate = (models) => {
      Pago.belongsTo(models.Cliente);
      
    };
  return Pago;
};