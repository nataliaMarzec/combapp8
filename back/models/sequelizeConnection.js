'use strict'

require('dotenv').config();


const Sequelize = require('sequelize');
const ClienteModel=require('./cliente');
const VentaModel=require('./venta');
const FacturaModel = require('./factura');
const ArticuloModel=require('./articulo');
const UsuarioModel=require('./usuario');
const PagoModel=require('./pago');

const sequelize = process.env.DB_URL
    ? 
      new Sequelize(process.env.DB_URL)
    : 
      new Sequelize(
          process.env.DB,
          process.env.DB_USER,
          process.env.DB_PASS,
          {
              host: process.env.DB_HOST,
              dialect: "mysql",
              // dialectOptions: {
              //     decimalNumbers: true,
              // },
              // timezone: '+06:00',
              operatorsAliases:'false',
                  pool: {
                  max: 10,
                  min: 0,
                  acquire: 30000,
                  idle: 10000
                }
          }
      );

var models={}
models=sequelize
models=Sequelize

const Cliente= ClienteModel(sequelize,Sequelize)
const Venta= VentaModel(sequelize,Sequelize)
const Factura= FacturaModel(sequelize,Sequelize)
const Articulo= ArticuloModel(sequelize,Sequelize)
const Usuario=UsuarioModel(sequelize,Sequelize)
const Pago=PagoModel(sequelize,Sequelize)



sequelize.authenticate()
 .then(() => {
   console.log('BD_CONECTADA!!');
 })
 .catch(err => {
   console.error('ERROR,_BD_NO_CONECTADA:', err);
 });

sequelize.sync({force:false})
// sequelize.sync({force:true})
  .then(() => {
    console.log(`Base de datos y tablas creadas, modelos sincronizados!`)
  })




module.exports = {
  sequelize,
  Cliente,
  Venta,
  Factura,
  Articulo,
  Usuario,
  Pago,
  
};

