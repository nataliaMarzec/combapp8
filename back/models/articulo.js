"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Factura, Venta } = require("./sequelizeConnection");
module.exports = function (sequelize, DataTypes) {
  const Articulo = sequelize.define(
    "Articulo",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      articuloId_venta:DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      codigo: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
      precio: DataTypes.INTEGER,
    },

    {
      tableName: "Articulos",
      modelName: "Articulo",
      
    }
  );

  Articulo.associate = (models) => {
    Articulo.belongsTo(models.Venta);
    Articulo.belongsTo(models.Factura);
  };

  return Articulo;
};
