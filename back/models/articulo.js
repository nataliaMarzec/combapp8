"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Factura } = require("./sequelizeConnection");
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
    Articulo.belongsTo(Factura, {
      foreignKey: {
        name: "articulo_id",
        allowNull: true,
      },
      as: "Factura",
    });
  };

  return Articulo;
};
