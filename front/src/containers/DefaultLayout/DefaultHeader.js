import React, { Component } from 'react';
import { Link, NavLink ,BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavbarBrand } from 'reactstrap';
import PropTypes from 'prop-types';
// const Full = React.lazy(()=>import('./views/Contactos/containers/Full/Full.js'));
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import afip from '../../assets/img/brand/afip.jpeg'
import routes from '../../views/Contactos/routes';

import Clientes from '../../componentes/Clientes/ClientesLista'
import ArticulosLista from '../../componentes/Articulos/ArticulosLista'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <NavbarBrand href="https://github.com/nataliaMarzec/combapp8/" target='_blank'>Combapp</NavbarBrand>

        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>

      
          
         <NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Clientes</DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/clientes" key="#clientes" className="nav-link">Ver lista de clientes</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/formularioClientes" className="nav-link">Registrar</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Detalles</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          </NavItem>
           
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Facturar</DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>
                <Link to="/facturaciones" key="#listado" className="nav-link">Listado</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/formulario" className="nav-link">Registrar</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Detalles</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Contactos</DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>
                <Link to="/contacts" key="#listadoContacts" className="nav-link">Listado</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/contactPerson" className="nav-link">contactoPersonal</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Detalles</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
       <Router>
        <Switch>
        <Route path="/clientes" name="clientes" render={props=><Clientes {...props}/>} />
        <Route path="/articulos" name="ArticulosLista" render={props => <ArticulosLista {...props}/>} />
    
      </Switch>
      </Router>

        <NavItem className="px-3">
          <NavbarBrand href="afip.gob.ar" target='_blank'>afip</NavbarBrand>
         </NavItem>
        </Nav>

        {/*Aca comienza el navbar de arriba(header)de la derecha*/}

        <Nav className="ml-auto" navbar>
          <AppNavbarBrand
            full={{ src: afip, width: 50, height: 40, alt: 'Afip Logo' }}
          />
          {/* minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}*/}

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5 a ver--</Badge></NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="natimarzec708@gmail.com" />
            </DropdownToggle>

            {/*aca comienza el menu del nav de arriba a la derecha costado*/}
            <DropdownMenu right>

              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>

              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>

              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>

              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>

              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />

              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>

              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
