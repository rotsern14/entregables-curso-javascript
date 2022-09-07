// tengo pensado arma un proyecto con una página e-commerce. sin embargo, hay ciertas variantes que deseo realizar, tanto la opción de que un usuario
// se pueda validar y registrar en el sitio con la opción de poder comprar un producto. Como también, existir la posibilidad de ofrecer para empresas o pyme
// pueda armar con una selección de productos a través de un formulario enviar una cotización que de primera instancia mostraria un mensaje
// al cliente indicandole que es una estimacion, debido que los precios pueden variar por el tipo de cambio.

// Esto ultimo seria asi por el hecho que hay muchas fluctuaciones del precio por el tipo de cambio, y lo mejor es detenerminar el monton correcto y ofrecer el presupuesto
// real con todos los descuentos y demas por mail o un chat bot en el mejor de los casos.

// Variables Globales:

let id = 0;
let nombre = "";
let precio = 0;
let productosElectr = [];

let seleccion = ''
let respuesta = 0;
let responde = 1;
let repeat = true;
let volver = true;
let verificando;



let arregloCPU = [
  { id: 1, nombre: "Intel i3", precio: 55000},
  { id: 2, nombre: "Intel i5", precio: 65000},
  { id: 3, nombre: "Intel i7", precio: 75000},
];

let arregloMonitor = [
  { id: 1, nombre: "Monitor Samsung 22 inch", precio: 63000},
  { id: 2, nombre: "Monitor LG 27 inch", precio: 75000},
  { id: 3, nombre: "Monitor Itachi 27 inch", precio: 61000},
];


let arregloDiscoDuro = [
    {id: 1, nombre:'WD 500 GB', precio:15000},
    {id: 2, nombre:'Samsung 1TB', precio:30000},
    {id: 3, nombre:'Adata 2TB', precio:38000},
];



let arregloTarjeta =[
    {id: 1, nombre: 'Mother Board Intel', precio:45000},
    {id: 2, nombre: 'Mother Board Asus', precio:65000},
    {id: 3, nombre: 'Mother Board Gigabit', precio: 77000},
];


// FUNCION CONSTRUCTORA

class  Productos {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio
    }
}


// alert(JSON.stringify(arregloMonitor));


// FUNCION CARGAR PRODUCTOS

function cargarProductos(){
    let nuevoObjeto;

    id = id +1;
    nombre = prompt('Ingrese el Nombre del Producto: ');
    precio = parseInt(prompt('Ingrese el Precio del Producto: '));
    nuevoObjeto = new Productos(id, nombre, precio);
    console.log(nuevoObjeto);
    productosElectr.push(nuevoObjeto);
}


//FUNCION CALCULAR EL TOTAL DE LOS PRODUCTOS + 21 % de IVA 

function calcularTotal(){
    const total = productosElectr.reduce((acumulador, item) => acumulador + item.precio, 0);
    alert('Acontinuacion se presentaran el presupuesto de los productos ingresados, con el 21% del IVA \n\n');
    alert(`${JSON.stringify(productosElectr)} \n\n La suma Total es: ${total} \n\n El Total con el 21% es = ${total+(total*0.21)}`);
}



// CALCULAR EL PRESUPUESTO DE LOS PRODUCTOS DE COMPUTACION. 

function ingresarProductosPromt(){

    seleccion = parseInt(prompt('A continuación, se generará el presupuesto en base a productos ingresados. \n\n Seleccione la opción a realizar. \n\n opción (1) - Ingresar Producto \n\n opción (2) - Finalizar Carga.'))

    repeat = true;

    while(repeat ==true){

        if(seleccion == 1){
            //llamar funcion para almacenar objetos
            cargarProductos();
            seleccion = parseInt(prompt('Para continuar con el proceso de carga, seleccione la opcion correspondiente: \n\n Seleccione la opción a realizar. \n\n opción (1) - Ingresar Producto \n\n opción (2) - Finalizar Carga.'))
            
        }else if(seleccion == 2){
            alert('Finaliza la carga de producto para el presupuesto');
            repeat = false;
        }else {
            seleccion = parseInt(prompt('Ingresaste una opcion no valida, por favor seleccione la opcion correcta para contininuar: \n\n opción (1) - Ingresar Producto \n\n opción (2) - Finalizar Carga. '))
        }

    }
}

// llamar funcion para carga producto para calcular total presupuesto

ingresarProductosPromt();

// calcular total de productos + el 21 % de IVA

calcularTotal();


// opcion para cargar algun nuevo producto para el presupuesto o  eliminar o editar un producto existente.

// alert('Estimado en caso de desear corregir el presupuesto y desea agregar un nuevo o mas productos o editar o borrar uno existente, seleccione la opcion correspondiente \n\n opcion(1) - carga otro producto \n\n opcion(2) - Editar Producto \n\n opcion(3) - Borrar Producto \n\n opcion(4) - Finalizar proceso');

verificando = parseInt(prompt('Estimado en caso de desear corregir el presupuesto y desea agregar un nuevo o mas productos o editar o borrar uno existente, seleccione la opcion correspondiente \n\n opcion(1) - carga otro producto \n\n opcion(2) - Editar Producto \n\n opcion(3) - Borrar Producto \n\n opcion(4) - Finalizar proceso'));

do {
    if(verificando == 1){
        ingresarProductosPromt();
        calcularTotal();
        alert('Gracias por su tiempo, finaliza proceso')
        volver = false;
    
    }else if(verificando == 2){
        encontrar();
        calcularTotal();
        volver = false;

    }else if(verificando == 3){
        eliminarProducto();
        calcularTotal();
        alert('Gracias por su tiempo, finaliza proceso')
        volver = false;

    }else if(verificando == 4){
        alert('Se termina proceso, saludos');
        volver = false;
    }else{
        alert('Ingresaste una opcion invalida');
        verificando = parseInt(prompt('Estimado en caso de desear corregir el presupuesto y desea agregar un nuevo o mas productos o editar o borrar uno existente, seleccione la opcion correspondiente \n\n opcion(1) - carga otro producto \n\n opcion(2) - Editar Producto \n\n opcion(3) - Borrar Producto \n\n opcion(4) - Finalizar proceso'));

    }

}while(volver);




//FUNCION PARA ENCONTRAR EL PRODUCTO

function encontrar(){

        let nombreProducto = prompt('Favor de ingresar el nombre del producto a Editar');
        let coincide = productosElectr.findIndex( items => items.nombre == nombreProducto);
        
        if(coincide != -1){
            alert('Producto Encontrado!!')
            productosElectr[coincide].nombre = prompt('Ingrese el nuevo nombre del Producto');
            productosElectr[coincide].precio = parseInt(prompt('Ingrese el nuevo Precio del Producto'));
            console.log(productosElectr);
        }else {
            alert('Producto no encontrado!, Finaliza el proceso');
        }
  }


// FUNCION BORRAR UN OBJETO DEL ARRAY 


function eliminarProducto() {
    let question = true;
    let borrarProducto = "";
    let productoEncontrado = "";


    while (question) {

        if(responde == 1) {

            borrarProducto = prompt("Introduzca la información del producto a eliminar");
            productoEncontrado = productosElectr.find(producto => producto.nombre === borrarProducto); // devuelve true si encuentra el producto o false en caso contrario

            if (productoEncontrado) { // Si se encontro el producto se elimina
                alert("Producto ingresado se encuentra en Registro, se procedera a borrar y mostrar el total + 21 % del IVA a los productos restantes.");
                productosElectr = productosElectr.filter(producto => producto.nombre !== borrarProducto);
                // console.log(productosElectr);
                question = false;
            } else {
                alert("No se encontro el producto que desea eliminar.");
                responde = parseInt(prompt("Desea eliminar un producto \n\n1- Sí \n2- No."));
  

            }

        }else if(responde == 2){
            alert('Ha seleccionado no borrar Producto')
            question = false;
        }else {
            alert('Has ingresado una opcion invalida, debes de introducir  \n\n (1)-Para borrar producto \n\n (2)-Para salir');
            responde = parseInt(prompt("Desea eliminar un producto \n\n1- Sí \n2- No."));
        }


    }
}



