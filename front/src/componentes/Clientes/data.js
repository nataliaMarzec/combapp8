import React from 'react'
import Item from './Item';
import Button from './Button';
import _ from 'lodash';

 
class Data extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      clientes : [] || null
    }
  }

  _remove(position){
    let { clientes } = this.state;
   
    let newData = [
      ...clientes.slice(0, position),
      ...clientes.slice(position + 1),
    ]

    this.setState({ clientes : newData });
    console.log("remove__",clientes.length)
  }

  _add(){
    let { clientes } = this.state;
    let newData = [
      ...clientes,
      {
        image : "papas.png",
        name  : "Papas a la francesa",
        portion : "140g",
        price   : Math.floor(Math.random() * 20) 
      }
    ]
    this.setState({ clientes : newData });
    console.log("add__",clientes.length," values __",this.state.clientes)
  }

  _getTotal(){
    return _.sumBy(this.state.clientes, function(o) { return o.price; });;
  }


  render() {
    return (
      <div className="app">
        <h1>Ejemplo de listas</h1>
        <ul className="todo-list">
          {this.state.clientes.map(
            (item,index) =>
              <Item clientes={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        </ul>
        <div className="footer">
          <Button
            onClick={this._add.bind(this)}
            name="Añadir producto"
          />
          <h4>$ {this._getTotal()}</h4>
        </div>
      </div>
    );
  }
}
 
export default Data;
