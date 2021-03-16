"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RegistroVentas", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    clienteId_venta: Sequelize.INTEGER,
    ventaId_cliente: Sequelize.INTEGER,
    estado: Sequelize.STRING,

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("RegistroVentas");
},
};