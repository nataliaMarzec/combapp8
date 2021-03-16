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
      name: "Usuarios",
      url: "/usuarios",
      icon: "icon-list",
      badge: {
        variant: "info",
      },
    },
// {
    //   name: 'Usuarios',
    //   url: '/usuarios',
    //   icon: 'icon-list',
    //   badge: {
    //     variant: 'info'
    //   }
    // },

    
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
    {
      name: "Disabled",
      url: "/dashboard",
      icon: "icon-ban",
      attributes: { disabled: true },
    },
    // {
    //   name: 'Download CoreUI',
    //   url: 'https://coreui.io/react/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
  ],
};
