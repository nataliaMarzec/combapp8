import React, { Component } from 'react'
import './App.scss'
// import Usuarios from './views/Usuarios/Usuarios'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink as Link} from "react-router-dom"
import ArticulosLista from './componentes/Articulos/ArticulosLista'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'))
const Login = React.lazy(() => import('./views/Pages/Login'))
const Register = React.lazy(() => import('./views/Pages/Register'))
const Page404 = React.lazy(() => import('./views/Pages/Page404'))
const Page500 = React.lazy(() => import('./views/Pages/Page500'))




function App() {
  return (
    <div className="App">
    <Router>
  {/* <Nav>
  <NavItem>
  <NavLink tag={Link} to="/clientes" activeClassName="active">Clientes</NavLink>
  </NavItem>
  <NavItem>
  <NavLink tag={Link} to="/usuarios" activeClassName="active">Usuarios</NavLink>
  </NavItem>
</Nav> */}
      <main className="App-main">
      <React.Suspense fallback={loading()}>
      <Switch>
        <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
        <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
        <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
        </Switch>
      </React.Suspense>
      <Switch>
        {/* <Route path="/clientes"  name="Clientes" /> */}
        {/* <Route path="/usuarios" component={Usuarios} /> */}
        {/* <Route path="/" name="ArticulosLista" render={props => <ArticulosLista {...props}/>} /> */}
        <Redirect to="/" />
      </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
















