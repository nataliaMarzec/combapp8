import React,{Component} from 'react'


class Item extends Component{
    _remove(){
        if(this.props.onRemove)
            this.props.onRemove();
    }
    render(){
        return (
            <li>
                {/* <div className="icon">
                    <img src={require(`../public/assets/${this.props.clientes.image}`)}  alt="hambuerger" />
                </div> */}
                <div className="name">
                    <span className="item-name">{this.props.clientes.name}</span>
                    <span className="item-price">{this.props.clientes.portion}</span>
                </div>
                <div className="price">
                    <h3>${this.props.clientes.price}</h3>
                </div>
                <button className="remove" onClick={this._remove.bind(this)}>
                    <i className="material-icons">close</i>
                </button>
            </li>
        )
    }
}
 
 
export default Item;