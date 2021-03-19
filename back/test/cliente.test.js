
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
// const setup = require("./setup");
const server = require("../server");
// const { Sequelize, Op, Model } = require("sequelize");
// const { Cliente, Factura } = require("../models/sequelizeConnection");
const clienteController = require("../controllers/ClienteController");
var clienteDos;

// beforeAll(done => {
//   done()
// })


  describe("initial", () => {
    test("first tests", () => {
      expect(true).toBe(true);
    });
  });


// afterAll(done => {
//   // Closing the DB connection allows Jest to exit successfully.
//   sequelize.close()
//   done()
// })
// });

// function setup() {

//     clienteDos = { nombre: 'Diego',apellido:'Ramirez', cuit: '23301111443',razonSocial:'diseño',
//     telefono:'2474112233',email:'diego@gmail.com'}
//     Cliente.bulkCreate([clienteDos]),
//     Cliente.insert(clienteDos)

// }
// describe('/clientes/', () => {
//   it('retorna 200 al ingresar datos correctos', async () => {
//     const resp = await clienteController.create({
//       id: '0937816882001',
//       cuit: '23222222343',
//       nombre: 'Lucia',
//       apellido:'Juarez',
//       razonSocial:'developer',
//       telefono:'2478223344',
//       email:'lucia@gmail.com'

//     });
//     expect(resp.status).toBe(200);
//   });

// });

// function get() {
//     expect(Cliente.get(clienteUno.id)).toBe(clienteUno)
// }

// function getNotContained() {
//     expect(Cliente.get("pirulito")).toBe(undefined)
// }

// function deleteObject() {
//     Cliente.delete(clienteUno.id);
//     expect(Cliente.get(clienteUno.id)).toBe(undefined)
//     expect(Cliente.get(clienteDos.id)).toBe(clienteDos)
//     expect(Cliente.all().length).toBe(1)

// }

// function update() {
//     clienteUno.nombre ="Esteban"
//     Cliente.update(clienteUno);
//     expect(Cliente.get(clienteUno.id).nombre).toBe("Esteban");
// }

// function all() {
//     var all = Cliente.all();
//     expect(all).toContain(clienteUno);
//     expect(all).toContain(clienteDos);
// }

//registrar funciones:

// beforeEach(setup)
// test(get.name, get)
// test(getNotContained.name, getNotContained)
// test(deleteObject.name, deleteObject)
// test(update.name, update)
// test(all.name, all)

// afterAll(done => {
//   // Closing the DB connection allows Jest to exit successfully.
//   Cliente.close()
//   done()
// })
