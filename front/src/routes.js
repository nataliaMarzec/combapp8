import React, { Component } from 'react';
import Contacts from './views/Contactos/Components/Contacts';
import ContactPerson from './views/Contactos/Components/ContactPerson'
import AddContact from './views/Contactos/Components/AddContact';
import EditContact from './views/Contactos/Components/EditContact';
import Full from './views/Contactos/containers/Full/Full';

const Cards = React.lazy(() => import('./views/Base/Cards'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Widgets = React.lazy(()=> import('./views/Widgets/Widget03.js'))
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'))
const Modals = React.lazy(() => import('./views/Notifications/Modals'))
const Colors = React.lazy(() => import('./views/Theme/Colors'))

const Usuarios = React.lazy(() => import('./views/Usuarios/Usuarios'));
const NuevoUsuario = React.lazy(() => import('./views/Usuarios/NuevoUsuario'));

const ArticulosLista= React.lazy(() => import('./componentes/Articulos/ArticulosLista'))
const Articulo= React.lazy(() => import('./componentes/Articulos/Articulo'))
const CargarArticulo= React.lazy(() => import('./componentes/Articulos/CargarArticulo'))

const Clientes =React.lazy(()=> import('./componentes/Clientes/ClientesLista'));
const Cliente = React.lazy(() => import('./componentes/Clientes/Cliente'));
const CargarCliente = React.lazy(() => import('./componentes/Clientes/CargarCliente'));

const Pago = React.lazy(()=>import('./componentes/Pago'))

const VentasLista =React.lazy(()=> import('./componentes/Ventas/VentasLista'));
const Venta = React.lazy(() => import('./componentes/Ventas/Venta'));
const CargarVenta = React.lazy(() => import('./componentes/Ventas/CargarVenta'));
const VentasAUnCliente=React.lazy(()=>import('./componentes/Ventas/VentasAUnCliente'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/views/widgets', name: 'Widgets', component: Widgets },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },

  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  
  

 { path: '/articulos', exact: true,key:'#articulosLista', name:'ArticulosLista', component:ArticulosLista },
 { path: '/cargarArticulo', exact:false, name:'CargarArticulo', component:CargarArticulo},
 { path:'./articulo', exact: false, name:'Articulo', component: Articulo},

 { path: '/clientes', exact: true, key:'#clientes', name: 'Clientes', component: Clientes},
 { path: '/cliente', exact: true, name: 'Cliente', component: Cliente },
 { path: '/cargarCliente', exact: true, name:'CargarCliente', component:CargarCliente },

 { path: '/pago', exact: true, name: 'Pago', component:Pago },

 { path: '/ventas', exact: true, key:'#ventas', name: 'VentasLista', component: VentasLista},
 { path: '/venta', exact: true, name: 'Venta', component: Venta },
 { path: '/cargarVenta', exact: true, name:'CargarVenta', component:CargarVenta },
 { path:'/ventasAUnCliente',exact:true,key:'#ventasAUnCliente',name:'VentasAUnCliente',component:VentasAUnCliente},

 { path: '/usuarios', exact: true, key:'#usuarios', name:'Usuarios', component: Usuarios },

 {path: '/contacts',exact:true,key:'#listadoContactos',name:'Contacts',component:Contacts},
 { path: '/contactPerson', exact:false, name:'ContactPerson', component:ContactPerson},
//  { path:'./addContact', exact: false, name:'AddContact', component:AddContact},


//  { path:'./breadcrumb', exact: false, name:'Breadcrumb', component:Breadcrumb},
//  {path:'./sidebars',exact:false,name:'Sidebars',component:Sidebar},
 {path:'./',exact:false,name:'Full',component:Full},




];






export default routes;
