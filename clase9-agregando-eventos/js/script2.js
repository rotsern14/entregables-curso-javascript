
function initCPU() {

    const miPosicion = document.getElementById('procesadorCPU');

    let arregloCPU = [
        { id: 1, nombre: "Intel i3", precio: 55000 },
        { id: 2, nombre: "Intel i5", precio: 65000 },
        { id: 3, nombre: "Intel i7", precio: 75000 },
      ];
      
 
 
    let select = createOptionsCpu(arregloCPU);

    miPosicion.appendChild(select);
 
}


function initMonitor() {

    const miPosicion = document.getElementById('monitorVisor');

    let arregloMonitor = [
        { id: 1, nombre: "Monitor Samsung 22 inch", precio: 63000 },
        { id: 2, nombre: "Monitor LG 27 inch", precio: 75000 },
        { id: 3, nombre: "Monitor Itachi 27 inch", precio: 61000 },
      ];
      
 
 
    let select = createOptionsMonitor(arregloMonitor);

    miPosicion.appendChild(select);
 
}

function initDisco() {

    const miPosicion = document.getElementById('hardDisk');

    let arregloDiscoDuro = [
        { id: 1, nombre: "WD 500 GB", precio: 15000 },
        { id: 2, nombre: "Samsung 1TB", precio: 30000 },
        { id: 3, nombre: "Adata 2TB", precio: 38000 },
      ];
      
      
 
 
    let select = createOptionsDisco(arregloDiscoDuro);

    miPosicion.appendChild(select);
 
}

function initTarjeta() {

    const miPosicion = document.getElementById('motherBoard');

    let arregloTarjeta = [
        { id: 1, nombre: "Mother Board Intel", precio: 45000 },
        { id: 2, nombre: "Mother Board Asus", precio: 65000 },
        { id: 3, nombre: "Mother Board Gigabit", precio: 77000 },
      ];
      
      
      
 
 
    let select = createOptionsTarjeta(arregloTarjeta);

    miPosicion.appendChild(select);
 
}


function initRam() {

    const miPosicion = document.getElementById('ramMemory');

    let arregloMemoriRam = [
        { id: 1, nombre: "ADATA 8 GB DDR3", precio: 16000 },
        { id: 2, nombre: "Samsung 8GB DDR4", precio: 18000 },
        { id: 3, nombre: "Kingston 16 DDR4", precio: 28000 },
      ];
      
      
 
 
    let select = createOptionsRam(arregloMemoriRam);

    miPosicion.appendChild(select);
 
}

function initPower() {

    const miPosicion = document.getElementById('powerSupply');

    let arregloPowerSupply = [
        { id: 1, nombre: "MSI MPG A850GF 850 Watt", precio: 49000 },
        { id: 2, nombre: "Corsair CS Series 750 Watt", precio: 43000 },
        { id: 3, nombre: "EVGA ATX 12V 600 Watt", precio: 38500 },
      ];
      
      
 
 
    let select = createOptionsPower(arregloPowerSupply);

    miPosicion.appendChild(select);
 
}
 
 

function createOptionsCpu(options) {

    let select = document.getElementById('selectProcesador');
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.precio) {
                option.setAttribute("value", element.precio);
            }
            if (element.nombre) {
                let optionText = document.createTextNode(element.nombre);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}

function createOptionsMonitor(options) {

    let select = document.getElementById('selectMonitor');
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.precio) {
                option.setAttribute("value", element.precio);
            }
            if (element.nombre) {
                let optionText = document.createTextNode(element.nombre);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}

function createOptionsDisco(options) {

    let select = document.getElementById('selectDiscoDuro');
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.precio) {
                option.setAttribute("value", element.precio);
            }
            if (element.nombre) {
                let optionText = document.createTextNode(element.nombre);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}
 

function createOptionsTarjeta(options) {

    let select = document.getElementById('selectTarjetaMadre');
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.precio) {
                option.setAttribute("value", element.precio);
            }
            if (element.nombre) {
                let optionText = document.createTextNode(element.nombre);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}
 
function createOptionsRam(options) {

    let select = document.getElementById('selectMemoriaRam');
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.precio) {
                option.setAttribute("value", element.precio);
            }
            if (element.nombre) {
                let optionText = document.createTextNode(element.nombre);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}
 
function createOptionsPower(options) {

    let select = document.getElementById('selectPowerSupply');
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.precio) {
                option.setAttribute("value", element.precio);
            }
            if (element.nombre) {
                let optionText = document.createTextNode(element.nombre);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}


initCPU();
initMonitor();
initDisco();
initTarjeta();
initRam();
initPower();






var txtProcesador = document.getElementById("valorProcesador");
var txtMonitor = document.getElementById("valorMonitor");
var txtDiscoDuro = document.getElementById("valorDiscoDuro");
var txtTarjeta = document.getElementById("valorTarjetaMadre");
var txtRam = document.getElementById("valorMemoriaRam");
var txtPowerSupply = document.getElementById("valorPowerSupply");

function GuardarValorSeleccion(select) {
  if (select.id == "selectProcesador") {
    console.log("procesador");
    if (select.selectedIndex !== 0) {
      txtProcesador.value = select.options[select.selectedIndex].value;
    } else {
      txtProcesador.value = "0";
    }
  } else if (select.id == "selectMonitor") {
    console.log("monitor");
    if (select.selectedIndex !== 0) {
      txtMonitor.value = select.options[select.selectedIndex].value;
    } else {
      txtMonitor.value = "0";
    }
  } else if (select.id == "selectDiscoDuro") {
    console.log("disco duro");
    if (select.selectedIndex !== 0) {
      txtDiscoDuro.value = select.options[select.selectedIndex].value;
    } else {
      txtDiscoDuro.value = "0";
    }
  } else if (select.id == "selectTarjetaMadre"){
    console.log("Tarjeta Madre");
    if (select.selectedIndex !== 0) {
        txtTarjeta.value = select.options[select.selectedIndex].value;
    }else {
        txtTarjeta.value = "0";
    }
  }else if (select.id == "selectMemoriaRam"){
    console.log("Memoria Ram");
    if (select.selectedIndex !== 0) { 
        txtRam.value = select.options[select.selectedIndex].value;
    }else {
        txtRam.value = "0";
    }
  }else {
    console.log("Power Supply");
    if (select.selectedIndex !== 0){
        txtPowerSupply.value = select.options[select.selectedIndex].value;
    }else {
        txtPowerSupply.value = "0";
    }
  }
}



function CalcularTotal() {
  var subTotal = document.getElementById("totalPresupuesto");
  var total = document.getElementById("totalPresupuestoIva");
  subTotal.value =
    parseInt(txtProcesador.value) +
    parseInt(txtMonitor.value) +
    parseInt(txtDiscoDuro.value) +
    parseInt(txtTarjeta.value) +
    parseInt(txtRam.value) +
    parseInt(txtPowerSupply.value);
  console.log("subTotal calculado: " + subTotal.value);
  total.value = (parseInt(subTotal.value) + parseInt(subTotal.value*0.21));
}
