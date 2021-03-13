
import React from "react";
import { Button, Col } from "reactstrap";

class VentasAUnClienteRows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editar: false,
      toogle: this.props.toggle,
      cliente:props.cliente,
      
    };
    
    this.abrirEditor = this.abrirEditor.bind(this);
    this.seleccionarCliente = this.seleccionarCliente.bind(this);
  }



  editar() {
    this.props.editarClienteFetch(this.props.cliente);
    this.props.toggle();
  }

  seleccionarCliente() {
    this.props.selector(this.props.cliente);
    console.log("seleccionar___", this.props.cliente.cuit);
    this.props.toggle();
  }

  agregarVenta = () => {
    this.props.clienteSeleccionado(this.props.cliente);
  };

  abrirEditor = (index) => (clientes) => {
    const clientesLista = this.state.clientes[index];
    console.log("abrirEditor", clientesLista);
    
  };

 
  editCliente = () => {
    this.props.editarCliente(this.props.cliente);
    this.props.toogle();
  };


  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.clientes !== this.props.clientes) {
      this.setState({ clientes: this.props.clientes });
      // console.log("clientes props", this.props.clientes, nextProps.clientes.values());
    }
    if (nextProps.cliente !== this.props.cliente) {
      this.setState({ cliente: nextProps.cliente });
    }
  }

  render = () => {
      
    return (
      <tr>
        <td>{this.state.cliente.id}</td>
        <td>{this.state.cliente.cuit}</td>
        <td>{this.state.cliente.nombre}</td>
        <td>{this.state.cliente.apellido}</td>
        <td>{this.state.cliente.razonSocial}</td>
        <td>{this.state.cliente.telefono}</td>
        <td>{this.state.cliente.email}</td>
        
        <td>
          &nbsp;&nbsp;
          <Button
            className="btn #e65100 orange darken-4"
            onClick={this.seleccionarCliente}
          >
            <i className="fa fa-dot-circle-o">{""} Editar</i>
          </Button>
          &nbsp;&nbsp;
          <Button
          className="btn sm #ff9800 orange btn"
          onClick={this.agregarVenta}
        >
           Iniciar venta
        </Button>
        &nbsp;&nbsp;
    
      
        </td>
      </tr>
    );
  };
}

export default VentasAUnClienteRows;
