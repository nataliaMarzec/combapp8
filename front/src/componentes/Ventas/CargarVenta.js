import React from "react";
import ClientesLista from "../Clientes/ClientesLista";
import Cliente from "../Clientes/Cliente";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  Col,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class CargarVenta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venta: props.venta || {},
      ventas: props.ventas || [],
      modal: false,
      clientes: props.clientes,
      cliente: props.cliente,
      seleccionado: {},
      listadoClientes: props.listadoClientes,
      cuit: "",
      seleccionadoCliente: {},
      pagosDelCliente:props.pagosDelCliente,
      ventasACliente:props.ventasACliente,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCliente = this.handleChangeCliente.bind(this);
    this.handleSubmitCliente = this.handleSubmitCliente.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  // componentWillReceiveProps(props) {
  //   this.setState({ cliente: props.cliente });
  //   this.setState({ clientes: props.clientes });
  //   this.setState({ pagosDeCliente: props.pagoDelCliente });
  //   props.listadoClientes();
  // }

  estadoInicial = () => {
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
      this.setState({
        cliente: {
          cuit: "",
          nombre: "",
          apellido: "",
          razonSocial: "",
          telefono: "",
          email: "",
        },
      });
      
  };

  handleSubmit(e) {
    const id = this.state.venta.id;
    if (id) {
      this.editarVenta(id);
    } else {
      this.crearVenta();
      console.log("submit-venta", { ...this.state.venta });
    }
    e.preventDefault(e);
  }

  handleChange(e) {
    var nuevaVenta = Object.assign({}, this.state.venta);
    nuevaVenta[e.target.name] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ venta: nuevaVenta });
  }

  crearVenta = () => {
    fetch("http://localhost:8282/ventas/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.venta),
    })
      .then((res) => this.props.listadoVentas())
      .then((res) => this.props.estadoInicial());
  };

  editarVenta = (id) => {
    fetch("http://localhost:8282/ventas/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.venta),
    })
      .then(this.props.listadoVentas())
      .then(this.props.estadoInicial());
  };

  verDetallesCliente(cuit) {
    console.log("cuit", cuit, "____");
    var listaActualizada = this.state.clientes.filter(
      (item) => cuit == item.cuit
    );
    this.setState({ clientes: listaActualizada });
    console.log(
      "resultado de buqueda",
      this.state.clientes,
      "listaActualizada",
      listaActualizada,
      "cuit",
      cuit,
      "----"
    );
  }

  handleChangeCliente = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.props.listadoClientes();
    console.log("didMount-cargarCliente", this.props.listadoClientes());
  }

  listadoBusqueda = (busqueda) => {
    if (busqueda != null) {
      fetch(`http://localhost:8282/clientes` + busqueda)
        .then((res) => res.json())
        .then((clts) => this.setState({ clientes: clts }));
    }
    if (busqueda == null) {
      fetch(`http://localhost:8282/clientes`)
        .then((res) => res.json())
        .then((clts) => this.setState({ clientes: clts }));
    }
  };

  handleSubmitCliente = (event) => {
    var busqueda;
    if (this.state.cuit === "") {
      this.listadoBusqueda(busqueda);
      console.log("subm-unCliente", busqueda);
    }
    if (this.state.cuit !== "") {
      busqueda = '?busqueda=cuit=="' + this.state.cuit + '"';
      this.listadoBusqueda(busqueda);
      console.log("subm-unCliente2", busqueda);
    }
    event.preventDefault(event);
  };

  clienteSeleccionado = (unCliente) => {};

  limpiarTabla = () => {
    document.getElementById("cuit").value = "";
    this.listadoClientes();
  };

  deudaTotal() {
    var total = 0;
    var saldoCobrado = 0;
    this.state.ventasACliente.forEach((ventas) => {
      total += parseFloat(ventas.importeTotal);
      saldoCobrado += parseFloat(ventas.saldoCobrado);
    });

    return (total - saldoCobrado).toFixed(2);
  }

  pagoDelCliente = () => {
    var total = 0;
    this.state.pagosDeCliente.forEach((pago) => {
      total += parseFloat(pago.importePago);
      console.log("pagos total", total);
    });

    return total.toFixed(2);
  };

  // calcularDeudaTotal = () => {
  //   var total = this.deudaTotal() - this.pagoDelCliente();
  //   return total.toFixed(2);
  // };

  calcularDeudaTotal = () => {
    var importe = 5;
    var cobrado = 2;
    var total = importe - cobrado;
    return total;
  };

  handleChangePagos = (event) => {
    var nuevosPagos = Object.assign({}, this.state.pagosDeCliente);
    nuevosPagos[event.target.name] = event.target.value;
    console.log("pagosDeCliente", nuevosPagos);
    this.setState({ pagosDeCliente: nuevosPagos });
  };

  render(props) {
    var listaCuitCliente = this.state.clientes.map((cliente, index) => {
      return (
        <div key={index}>
          <option key={index} value={cliente.cuit} />
        </div>
      );
    });
    return (
      <Col xs="12" md="12">
        <ModalBody>
          <Card>
            <CardHeader>
              <Form onSubmit={this.handleSubmitCliente} id="formulario">
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
                      onClick={() => this.verDetallesCliente(this.state.cuit)}
                    >
                      <i className="fa fa-dot-circle-o"></i>Ver cliente
                    </Button>
                    {/* <Button
                      type="button"
                      style={{ margin: "2px" }}
                      color="success"
                      outline
                      onClick={this.limpiarTabla}
                    >
                      <i className="fa fa-dot-circle-o"></i>Ver ventas
                    </Button> */}
                  </div>
                </div>
              </Form>
            </CardHeader>
          </Card>
          <Form className="form-horizontal">
          <FormGroup row>
              <Col md="3">
                <Label for="cuit">cliente</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="number"
                  id="cuit"
                  name="cuit"
                  placeholder="Completa Venta..."
                  required={true}
                  value={this.state.cuit}
                  onChange={this.handleChangeCliente}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="nroVenta">nroVenta</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="number"
                  id="nroVenta"
                  name="nroVenta"
                  placeholder="Completa Venta..."
                  required={true}
                  value={this.state.venta.nroVenta}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="fecha">Fecha</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  id="fecha"
                  name="fecha"
                  placeholder="Elegir fecha..."
                  required
                  value={this.state.venta.fecha}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="tipoDePago">tipoDePago</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="tipoDePago"
                  name="tipoDePago"
                  placeholder="Completa tipo de Pago..."
                  value={this.state.venta.tipoDePago}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="facturado">facturado</Label>
              <input
                type="checkbox"
                name="facturado"
                checked={this.state.venta.facturado}
                onChange={this.handleChange}
              ></input>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="importeTotal">ImporteTotal</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="number"
                  id="importeTotal"
                  name="importeTotal"
                  placeholder="Completa importe total..."
                  value={this.state.venta.importeTotal}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label for="saldoCobrado">Nro&nbsp;saldoCobrado</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="number"
                  id="saldoCobrado"
                  name="saldoCobrado"
                  placeholder="Completa saldoCobrado..."
                  required={false}
                  value={this.state.venta.saldoCobrado}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" md="9">
                <Input
                  type="number"
                  id="montoSinCobrar"
                  name="montoSinCobrar"
                  value={this.calcularDeudaTotal() || 0}
                  onChange={this.handleChange}
                />
                {/* <div>Total:{this.calcularDeudaTotal}</div> */}
              </Col>
            </FormGroup>
            <Button
              type="submit"
              color="success"
              outline
              onClick={this.handleSubmit}
            >
              <i className="fa fa-dot-circle-o"></i>Calcualar
            </Button>
            <Button
              type="submit"
              color="success"
              outline
              onClick={this.handleSubmit}
            >
              <i className="fa fa-dot-circle-o"></i> Guardar venta
            </Button>
          </Form>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </Col>
    );
  }

  clienteSeleccionado = (unCliente) => {};

  unCliente = () => {
    var unCliente = this.state.seleccionado;
    return (
      <Cliente
        cliente={unCliente}
        clienteSeleccionado={this.clienteSeleccionado(unCliente)}
        seleccionado={this.state.seleccionado}
        clientes={this.state.clientes}
      />
    );
  };
}

export default CargarVenta;
