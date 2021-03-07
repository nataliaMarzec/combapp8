"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Venta, Factura } = require("./sequelizeConnection");
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
      fechaPago:DataTypes.DATE,
      importePago: DataTypes.BIGINT.UNSIGNED,
      idPago: DataTypes.BIGINT.UNSIGNED,
      

    },
    {
      tableName: "Pagos",
      modelName: "Pago",
    }
  );

//   Cliente.associate = (models) => {
//     Cliente.hasMany(Factura, {
//       foreignKey: "cliente_id",
//       as: "factura",
//     });
//   };

  return Pago;
};
