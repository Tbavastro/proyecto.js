class Producto {
    constructor(id, nombre, descripcion, precio, img, alt) {
        this.id = id,
            this.nombre = nombre,
            this.descripcion = descripcion,
            this.precio = precio,
            this.img = img
        this.alt = alt
    }
    descripcionCarrito() {
        return `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${this.img}" class="img-fluid rounded-start" alt="${this.alt}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${this.descripcion}</h5>
                    <p class="card-text">Precio : ${this.precio}</p>
                </div>
            </div>
        </div>
    </div>`

    }
    descripcionprod() {
        return `<div class="item">
    <figure>
    <img src="${this.img}">
     <alt="${this.alt}" class="Nov">
    </figure>
    <div class="info-producto">
        <h2 class="Phantom">${this.descripcion}</h2>
     <p class="p-recio">$${this.precio}</p>
      <button class="Ver" id="añadir-${this.id}">Añadir al carrito</button>
    </div>`
    }



}
class controlProd {
    constructor() {
        this.listaProductos = []
    }
    agregar(producto) {
        this.listaProductos.push(producto)
    }
    mostrarenDOM() {
        let contenedor_productos = document.getElementById("contenedor_productos")
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += producto.descripcionprod()

        })
        this.listaProductos.forEach(producto => {
            const añadir = document.getElementById(`añadir-${producto.id}`)
            añadir.addEventListener("click", () => {
                carro.agregar(producto)
                carro.guardarStorage()
                carro.mostrarenDOM()
            })
        })

    }
}
class carrito {
    constructor() {
        this.listaCarrito = []
    }
    agregar(producto) {
        this.listaCarrito.push(producto)
    }
    guardarStorage() {
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
    }
    treaerStorage() {
        let listaCarritoJSON = localStorage.getItem("listaCarrito")
        let listaCarritojs = JSON.parse(listaCarritoJSON)
        let listaAux = []
        listaCarritojs.forEach(producto => {
            let Product = new Producto(producto.id, producto.nombre, producto.descripcion, producto.precio, producto.img, producto.alt)
            listaAux.push(Product)
        })
        this.listaCarrito = listaAux
    }
    mostrarenDOM() {
        let contenedor_carrito = document.getElementById("contenedor_carrito")
        contenedor_carrito.innerHTML = ""
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += producto.descripcionCarrito()
        })

    }

}
const CP = new controlProd()
const carro = new carrito()

const prod1 = new Producto(1, "zapatilla", "Nike Dunk Low Retro 27", 58000, "https://nikearprod.vtexassets.com/arquivos/ids/220502-800-800?v=638100906284400000&width=800&height=800&aspect=true", "imagen zapatilla")
const prod2 = new Producto(2, "zapatilla", "Nike Air Force 1 '07", 50000, "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a174924-de99-465f-bbb7-f39762946823/air-force-1-07-zapatillas-g7cG6H.png", "imagen zapatilla")
const prod3 = new Producto(3, "zapatilla", "Adidas Forum Exhibit Low", 48000, "https://assets.adidas.com/images/w_600,f_auto,q_auto/81cb61e69fe94bda88cfae5f017fea87_9366/Zapatillas_Forum_Exhibit_Low_Blanco_GX4121_01_standard.jpg", "imagen zapatilla")
const prod4 = new Producto(4, "zapatilla", "Adidas Forum Low x Bad Bunny", 68000, "https://acdn.mitiendanube.com/stores/001/160/313/products/520765b31-e11443e8f3613bb5c016239419409406-640-0.jpg", "imagen zapatilla")

CP.agregar(prod1)
CP.agregar(prod2)
CP.agregar(prod3)
CP.agregar(prod4)


carro.treaerStorage()
carro.mostrarenDOM()

CP.mostrarenDOM()





































// const contenedor_productos = document.getElementById("contenedor_productos")

// const listaProductos = [{ id: 1, nombre: "zapatilla", precio: 40000, descripcion: "Adidas Forum Low x Bad Bunny", img: "", alt:  },
// { id: 2, nombre: "zapatilla", precio: 58000, descripcion: "Nike Dunk Low Retro 27", img:  },
// { id: 3, nombre: "zapatilla", precio: 45000, descripcion: "Nike Air Force 1 '07", img: "", alt: "imagen zapatilla" },
// { id: 4, nombre: "zapatilla", precio: 65000, descripcion: "Adidas Forum Exhibit Low", img: "", alt: "imagen zapatilla" },
// ];

// listaProductos.forEach(producto => {
//     contenedor_productos.innerHTML +=

// });
