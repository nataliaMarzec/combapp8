"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Articulo,Cliente, Factura } = require("./sequelizeConnection");
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
      tipoDePago: DataTypes.STRING,
      facturado: DataTypes.STRING,
      importeTotal: DataTypes.BIGINT.UNSIGNED,
      saldoCobrado: DataTypes.BIGINT.UNSIGNED,
      montoSinCobrar: DataTypes.BIGINT.UNSIGNED,
      estado:DataTypes.STRING,
    },

    {
      tableName: "Ventas",
      modelName: "Venta",
    }
  );
  Venta.associate = (models) => {
    Venta.hasMany(models.Articulo, {
      foreignKey:"articuloId_venta",
      as: "Articulos",
    });
    Venta.belongsToMany(models.Cliente, {
      through:"RegistroVentas",
      foreignKey: "clienteId_venta", 
      as: "Clientes",
      
     
    });
    };
  

  return Venta;
};
