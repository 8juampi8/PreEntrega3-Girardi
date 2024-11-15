const PRODUCTOS = [

    // LATAS
  
    { id: 1, tipo: "Lata", nombre: "Summer Ale", precio: 2000, medida: "500ml" },
  
    { id: 2, tipo: "Lata", nombre: "Florida Honey", precio: 2000, medida: "500ml" },
  
    { id: 3, tipo: "Lata", nombre: "English Porter", precio: 2000, medida: "500ml" },
  
    { id: 4, tipo: "Lata", nombre: "Session Ipa", precio: 2000, medida: "500ml" },
  
    { id: 5, tipo: "Lata", nombre: "American Ipa", precio: 2000, medida: "500ml" },
  
    // CHOPERAS 20L
  
    { id: 6, tipo: "Chopera 20LT", nombre: "Summer Ale", precio: 10000, medida: "20lt" },
  
    { id: 7, tipo: "Chopera 20LT", nombre: "Rubia", precio: 10000, medida: "20lt" },
  
    { id: 8, tipo: "Chopera 20LT", nombre: "American Ipa", precio: 10000, medida: "20lt" },
  
    { id: 9, tipo: "Chopera 20LT", nombre: "Session Ipa", precio: 10000, medida: "20lt" },

    // CHOPERAS 50L
  
    { id: 10, tipo: "Chopera 50LT", nombre: "Summer Ale", precio: 22500, medida: "50lt" },
  
    { id: 11, tipo: "Chopera 50LT", nombre: "Rubia", precio: 22500, medida: "50lt" },
  
    { id: 12, tipo: "Chopera 50LT", nombre: "American Ipa", precio: 22500, medida: "50lt" },
  
    { id: 13, tipo: "Chopera 50LT", nombre: "Session Ipa", precio: 22500, medida: "50lt" },
  
  ];
  
  // MUESTRO PRODUCTOS EN HTML
  
  function verProductos(filtrarProductos = PRODUCTOS) {
  
    const CONTENEDOR_DE_PRODUCTOS = document.getElementById("contenedorProductos");
  
    CONTENEDOR_DE_PRODUCTOS.innerHTML = ``;
  
    filtrarProductos.forEach(producto => {
  
      const CAJA_PRODUCTO = document.createElement("div");
  
      CAJA_PRODUCTO.className = "tarjeta-producto";
  
      CAJA_PRODUCTO.innerHTML = `
  
        <img src="" alt="producto">
  
        <h2>${producto.nombre}</h2>
  
        <h4>${producto.tipo}</h4>
  
        <p>$${producto.precio}</p>
  
        <button onclick="agregarAlCarrito(${producto.id})">AGREGAR</button>
  
      `;
  
      CONTENEDOR_DE_PRODUCTOS.appendChild(CAJA_PRODUCTO);
  
    });
  
  }
  
  // FILTRADO DE PRODUCTOS
  
  function filtrar(tipo) {
  
    let filtrarProductos;
  
    if (tipo) {
  
      filtrarProductos = PRODUCTOS.filter(producto => producto.tipo === tipo);
  
    } else {
  
      filtrarProductos = PRODUCTOS;
  
    }
  
    verProductos(filtrarProductos);
  
  }
  
  // BOTONES DE FILTRADO
  
  document.getElementById("todos").addEventListener("click", () => filtrar(""));
  
  document.getElementById("latas").addEventListener("click", () => filtrar("Lata"));
  
  document.getElementById("veinteLitros").addEventListener("click", () => filtrar("Chopera 20LT"));
  
  document.getElementById("cincuentaLitros").addEventListener("click", () => filtrar("Chopera 50LT"));
  
  // CARRITO DE PRODUCTOS
  
  function agregarAlCarrito(id) {
  
    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || [];
  
    const PRODUCTO = PRODUCTOS.find(prod => prod.id === id);
  
    const PRODUCTO_EN_CARRITO = CARRITO.find(prod => prod.id === id);
  
    if (PRODUCTO_EN_CARRITO) {
  
      PRODUCTO_EN_CARRITO.cantidad += 1;
  
    } else {
  
      CARRITO.push({ ...PRODUCTO, cantidad: 1 });
  
    }
  
    localStorage.setItem("carrito", JSON.stringify(CARRITO));
  
    verCarrito();
  
  }
  
  function verCarrito() {
  
    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || [];
  
    const LISTA_CARRITO = document.getElementById("carrito");
  
    LISTA_CARRITO.innerHTML = ``;
  
    let total = 0;
  
    CARRITO.forEach((producto, index) => {
  
      let li = document.createElement("li");
  
      li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;
  
      li.innerHTML += `
  
        <button onclick="eliminarDelCarrito(${index})">ELIMINAR</button>
  
      `;
  
      LISTA_CARRITO.appendChild(li);
  
      total += producto.precio * producto.cantidad;
  
    });
  
    document.getElementById("total").textContent = `Total: $${total}`;
  
  }
  
  function eliminarDelCarrito(index) {
  
    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || [];
  
    CARRITO.splice(index, 1);
  
    localStorage.setItem("carrito", JSON.stringify(CARRITO));
  
    verCarrito();
  
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
  
    verProductos();
  
    verCarrito();
  
  });