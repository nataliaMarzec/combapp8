import React from "react";
import Venta from "./Venta";
import CargarVenta from "./CargarVenta";
import Cliente from "../Clientes/Cliente"
// import Articulos from "../Articulos/ArticulosLista";

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
// const fetchClientes = require("../fetchResponse");

class VentasLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seleccionado: {},
      venta: {},
      ventas: [],
      clientes: props.clientes,
      articulos: props.articulos,
      pagosCliente: [],
      modal: false,
      cuit: "",
      ventasACliente: [],
      pagosDeCliente: [],
      clientes:props.clientes,
      cliente:props.cliente,
      
     
    };
    this.seleccionar = this.seleccionar.bind(this);
    this.actualizarAlEliminar = this.actualizarAlEliminar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.listadoVentas = this.listadoVentas.bind(this);
    this.estadoInicial = this.estadoInicial.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  componentWillReceiveProps(props) {
    this.setState({ cliente: props.cliente });
    this.setState({ clientes: props.clientes });
    console.log("reciveV",props.clientes)
    this.setState({ pagosDeCliente: props.pagoDelCliente });
  }

  componentDidMount() {
    this.listadoVentas();
    console.log("didMoutnv",this.listadoVentas())
    
  }
  componentWillMount(){
    this.listadoClientes();
    console.log("willMount",this.listadoClientes())
  }

  listadoClientes = () => {
    fetch(`http://localhost:8282/clientes`)
      .then((res) => res.json())
      .then(
        (cltes) => this.setState({ clientes: cltes, cliente: {} }),
        console.log("Enviado clientes", this.state.clientes)
      );
  };
  
  listadoVentas = () => {
    fetch(`http://localhost:8282/ventas`)
      .then((res) => res.json())
      .then(
        (vtas) => this.setState({ ventas: vtas, venta: {} }),
        console.log("Enviado ventas", this.state.ventas)
      );
  };

  estadoInicial = () => {
    this.setState({
      venta: {
        nroVenta: "",
        fecha: "",
        tipoDePago: "",
        facturado: "no",
        importeTotal: "",
        saldoCobrado: "",
        montoSinCobrar: "",
      },
    });
  };

 
  actualizarAlEliminar = (unaVenta) => {
    var listaActualizada = this.state.ventas.filter(
      (item) => unaVenta !== item
    );
    this.setState({ ventas: listaActualizada, venta: {} });
  };

  eliminarVenta(id) {
    this.props.eliminarVenta(id);
  }

  seleccionar = (unaVenta) => {
    this.setState({ venta: unaVenta });
  };


  editarVentaFecht(id) {
    this.props.editarVenta(id);
    this.toogle();
  }
  editarVenta = (unaVenta) => {
    this.setState({ venta: unaVenta });
  };

  

  render(props) {
 
    return (
      <div className="container">
        <div></div>
        <Row>&nbsp;</Row>
        <Container fluid>
          <Button color="success" onClick={this.toggle}>
            Iniciar venta
          </Button>
        
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              <strong>Nueva</strong>Venta
            </ModalHeader>
            <CargarVenta
              listadoClientes={this.listadoClientes}
              listadoVentas={this.listadoVentas}
              venta={this.state.venta}
              ventas={this.state.ventas}
              cliente={this.state.cliente}
              clientes={this.state.clientes}
              editarVentaFecht={this.props.editarVentaFecht}
              estadoInicial={this.estadoInicial}
            />
          </Modal>
          <Row>&nbsp;</Row>
        </Container>

        <div className="animated fadeIn">
          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Ventas Lista
                </CardHeader>
                <CardBody>
                  <Table responsive bordered size="sm">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>cliente</th>
                        <th>nroVenta</th>
                        <th>fecha</th>
                        <th>cliente</th>
                        <th>tipoDePago</th>
                        <th>facturado</th>
                        <th>importeTotal</th>
                        <th>saldoCobrado</th>
                        <th>montoSinCobrar</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  renderRows() {
    
    let ventas = this.state.ventas;
    return !ventas
      ? console.log("NULL", null)
      : ventas.map((unaVenta, index) => {
          return (
            <Venta
              key={index}
              index={index}
              venta={unaVenta}
              ventas={this.state.ventas}
              selector={this.seleccionar}
              actualizarAlEliminar={this.actualizarAlEliminar}
              eliminarVenta={this.eliminarVenta.bind(this)}
              editarVenta={this.editarVenta}
              activarEditar={true}
              toggle={this.toggle}
              isMutableItem={(unaVenta) => unaVenta.id}
              editarVentaFecht={this.editarVentaFecht.bind(this)}
              clientes={this.state.clientes}
              cliente={this.state.cliente}
            />
          );
        });
  }


}

export default VentasLista;
