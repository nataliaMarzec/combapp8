"use strict";
const { Sequelize, Op, Model } = require("sequelize");
const { Venta, Factura } = require("./sequelizeConnection");
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
      cuit: DataTypes.BIGINT.UNSIGNED,
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
          msg: "El nombre solo puede contener letras"
      },
      len: {
          args: [2, 255],
          msg: "El nombre tiene que ser entre 2 y 255 caracteres"
      }

      },
      apellido: DataTypes.STRING,
      razonSocial: DataTypes.STRING,
      telefono: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        // validate: {
        //     isEmail: {
        //         args: true,
        //         msg: "El campo tiene que ser un correo valido"
        //     }
        // }
    },

      // ventas: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: Venta,
      //     key: "id",
      //   },
      // },
    },

    {
      tableName: "Clientes",
      modelName: "Cliente",
    }
  );

  Cliente.associate = (models) => {
    Cliente.hasMany(Factura, {
      foreignKey: "cliente_id",
      as: "factura",
    });
  };

  return Cliente;
};
