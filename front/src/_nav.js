export default {
  items: [
  
    {
      name: "ArticulosLista",
      url: "/articulos",
      icon: "icon-bag",
    },
    {
      name: "VentasLista",
      url: "/ventas",
      icon: "icon-info",
    },
    {
      name: "VentasAUnCliente",
      url: "/ventasAUnCliente",
      icon: "icon-info",
    },
    {
      name: "Clientes",
      url: "/clientes",
      icon: "icon-people",
    },
  

    
    {
      name: "Pages",
      url: "/pages",
      icon: "icon-star",
      children: [
        {
          name: "Login",
          url: "/login",
          icon: "icon-star",
        },
        {
          name: "Register",
          url: "/register",
          icon: "icon-star",
        },

      ],
    },
    
  
  ],
};
