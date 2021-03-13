"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Venta, Factura,Pago } = require("./sequelizeConnection");
module.exports = function (sequelize, DataTypes) {
  const Cliente = sequelize.define(
    "Cliente",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ventaId_cliente:DataTypes.INTEGER,
      pagoId_cliente:DataTypes.INTEGER,
      cuit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Por favor completa tu nombre",
          },
        },
        isAlpha: {
          args: true,
          msg: "El nombre solo puede contener letras",
        },
        len: {
          args: [2, 255],
          msg: "El nombre tiene que ser entre 2 y 255 caracteres",
        },
      },
      apellido: DataTypes.STRING,
      razonSocial: DataTypes.STRING,
      telefono: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "Clientes",
      modelName: "Cliente",
    }
  );

  Cliente.associate = (models) => {
    Cliente.hasMany(models.Factura, {
      foreignKey: "clienteId_factura",
      as: "Facturas",
    });
    Cliente.belongsTo(models.Venta);
    Cliente.belongsTo(models.Pago);

    // Cliente.belongsToMany(models.Venta, {
    //   through:"Registro",
    //   as: "Venta",
    //   foreignKey: "cliente_venta_id", 
     
    // });
  };

  return Cliente;
};
