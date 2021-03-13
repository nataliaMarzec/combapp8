import React from "react";
import Cliente from "../Clientes/Cliente";
import {
  Table,
  Container,
  Row,
  Button,
  Modal,
  ModalHeader,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import VentasAUnClienteRows from "./VentasAUnClienteRows";

class VentasAUnCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seleccionado: {},
      cliente: {},
      clientes: [],
      modal: false,
      editable: false,
      cuit: "",
      cuitElegido:"",
      pagosDelCliente: [],
      ventasACliente:[]
    };
    this.seleccionar = this.seleccionar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.generarFila = this.generarFila.bind(this);
    this.listadoClientes = this.listadoClientes.bind(this);
    this.estadoInicial = this.estadoInicial.bind(this);
    this.clienteSeleccionado = this.clienteSeleccionado.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  estadoInicial = () => {
    this.setState({
      cliente: {
        cuit: "",
        nombre: "",
        apellido: "",
        razonSocial: "",
        telefono: "",
        email: "",
      },
       pagosCliente:[]
    });
    this.setState({
        venta: {
          nroVenta: "",
          fecha: "",
          tipoDePago: "",
          facturado: "no",
          importeTotal: "",
          saldoCobrado: "",
        },
        montoSinCobrar: 0,
      });
  };
    

  generarFila(unCliente) {
    this.setState({ cliente: unCliente });
    var myArray = this.state.clientes.slice();
    myArray.push({ ...this.state.cliente });
    this.setState({ clientes: myArray });
    console.log(myArray, " --array handler  ", this.state.clientes.values());
  }

  verDetallesCliente(cuit) {
    var listaActualizada = this.state.clientes.find(
      (item) => cuit == item.cuit
    );
    console.log("listaActualizada", listaActualizada);
    this.setState({ cliente: listaActualizada,cuit:cuit });
    return listaActualizada;
  }

  handleChangeCliente = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    this.setState({cuitElegido:value})
    console.log("change",this.state.cuitElegido,"value",value,"name",name)
  };

  handleChange=(e)=>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
}


  componentDidMount() {
    this.listadoClientes();
  }

  listadoClientes = () => {
    fetch(`http://localhost:8282/clientes`)
      .then((res) => res.json())
      .then(
        (cltes) => this.setState({ clientes: cltes, cliente: {} }),
        console.log("ClientaEnviado", this.state.clientes)
      );
  };

  listadoBusqueda = (busqueda) => {
    if (busqueda != null) {
      fetch(`http://localhost:8282/clientes` + busqueda)
        .then((res) => res.json())
        .then((clts) => this.setState({ clientes: clts }))
    }
  };

  encontrarCliente = (cuit) => {
    fetch("http://localhost:8282/clientes/busqueda/:" + cuit)
      .then((res) => res.json())
      .then((unCliente) => this.setState({ cliente: unCliente, cuit: cuit }))
      .then(console.log("cuit", cuit))
  };

  limpiarTabla = () => {
    document.getElementById("cuit").value = "";
    // this.listadoClientes();
  };

  handleSubmit=(event)=>(cuitCliente)=>{
      var busqueda;
      if(this.state != ""){
        busqueda = '?busqueda=cuit=="' +cuitCliente + '"';
        this.encontrarCliente(busqueda);
      }
      event.preventDefault(event);
  }

  seleccionar = (unCliente) => {
    this.setState({ cliente: unCliente, cuit: unCliente.cuit });
  };

  editarClienteFetch(id) {
    this.props.editarCliente(id);
    this.toogle();
  }
  editarCliente = (unCliente) => {
    this.setState({ cliente: unCliente });
  };
  clienteSeleccionado = (unCliente) => {};



  render(props) {
    var listaCuitCliente = this.state.clientes.map((cliente) => {
      return (
        <div>
          <option value={cliente.cuit} cuitElegido={cliente.cuit} />
          </div>
          
        );
    });
    var cuitCliente=this.state.cuit
    return (
      <div className="container">
        <div></div>
        <Row>&nbsp;</Row>
        <Container fluid>
          <Button color="success" onClick={this.toggle}>
            Nuevo cliente
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader editable={false} toggle={this.toggle}>
              <strong>Nuevo</strong>Cliente
            </ModalHeader>
          </Modal>
          <Row>&nbsp;</Row>
        </Container>
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i>Iniciar venta
                </CardHeader>
                <CardHeader>
                  <Form onSubmit={this.handleSubmit(this.state.cuitElegido)} id="formulario">
                    <FormGroup row>
                      <Col xs="12" md="9">
                        <Input
                          type="number"
                          id="cuit"
                          name="cuit"
                          placeholder="Elegir cuit"
                          onChange={this.handleChangeCliente}
                          list="cliente"
                        />
                      </Col>
                      <datalist id="cliente">{listaCuitCliente}</datalist>
                    </FormGroup>
                    <div className="row">
                      <div className="input-field col s12 m12">
                        <Button
                          type="button"
                          style={{ margin: "2px" }}
                          color="info"
                          outline
                          onChange={()=>this.handleChange}
                          onClick={() =>
                            this.verDetallesCliente(this.state.cuitElegido)
                          }
                        >
                          <i className="fa fa-dot-circle-o"></i>Ver detalles de
                          cliente
                        </Button>
                        <Button
                          type="button"
                          style={{ margin: "2px" }}
                          color="success"
                          outline
                          onClick={this.limpiarTabla}
                        >
                          <i className="fa fa-dot-circle-o"></i>Limpiar
                        </Button>
                      </div>
                    </div>
                  </Form>
                </CardHeader>
                
      
                <CardBody>
                  <Table responsive bordered size="sm">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>cuit</th>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>razonSocial</th>
                        <th>telefono</th>
                        <th>email</th>
                      </tr>
                    </thead>
                    <tbody>{this.unCliente()}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  clienteSeleccionado = (unCliente) => {};

  unCliente = () => {
    var cuit = this.state.cuitElegido;
    var unCliente=this.state.cliente
      if(unCliente){
          return (
            <VentasAUnClienteRows
              cuit={cuit}
              cliente={unCliente}
              clienteSeleccionado={this.clienteSeleccionado(unCliente)}
              seleccionado={this.state.seleccionado}
              clientes={this.state.clientes}
              idCliente={(unCliente) => unCliente.id}
              />
            );
      }if(!unCliente){
       return console.log("NULL", null,unCliente)
      }
    }
    renderRows() {
      let clientes = this.state.clientes;
      return !clientes
        ? console.log("NULL", null)
        : clientes.map((unCliente, index) => {
            return (
              <Cliente
                key={index}
                index={index}
                cliente={unCliente}
                clientes={this.state.clientes}
                selector={this.seleccionar}
                clienteSeleccionado={this.clienteSeleccionado}
                actualizarAlEliminar={this.actualizarAlEliminar}
                eliminarCliente={this.eliminarCliente.bind(this)}
                editarCliente={this.editarCliente}
                activarEditar={true}
                toggle={this.toggle}
                isMutableItem={(unCliente) => unCliente.id}
                editarClienteFetch={this.editarClienteFetch.bind(this)}
              />
            );
          });
    }
}

export default VentasAUnCliente;
