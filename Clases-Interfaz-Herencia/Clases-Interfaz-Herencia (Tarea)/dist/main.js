"use strict";
console.log("------------Camion--------------");
class Camion {
    constructor() {
        this.numeroLlantas = 8;
        this.modelo = 2020;
        this.fabricante = "Casa Vaca";
    }
    conducir() {
        console.log("El Camion esta siendo conducido");
    }
    encender() {
        console.log("El Camion esta encendidiendo");
    }
    acelerar() {
        console.log("El Camion esta acelerando");
    }
    frenar() {
        console.log("El Camion esta frenando");
    }
    apagar() {
        console.log("El Camion esta apagado");
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let camion = new Camion();
camion.encender();
camion.conducir();
camion.acelerar();
camion.frenar();
camion.apagar();
console.log(camion.fabricante);
console.log(camion.modelo);
console.log(camion.numeroLlantas);
console.log("------------Camioneta--------------");
class Camioneta {
    constructor() {
        this.numeroLlantas = 4;
        this.fabricante = "Chevrolet";
        this.modelo = 2010;
    }
    conducir() {
        console.log("La Camioneta esta siendo conducida");
    }
    encender() {
        console.log("La Camioneta esta encendidiendo");
    }
    acelerar() {
        console.log("La Camioneta esta acelerando");
    }
    frenar() {
        console.log("La Camioneta esta frenando");
    }
    apagar() {
        console.log("La Camioneta esta apagada");
    }
}
function ejecutar(vehiculo) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let camioneta = new Camioneta();
camioneta.encender();
camioneta.conducir();
camioneta.acelerar();
camioneta.frenar();
camioneta.apagar();
console.log(camioneta.modelo);
console.log(camioneta.fabricante);
console.log(camioneta.numeroLlantas);
console.log("------------Vehiculo--------------");
class Vehiculos {
    constructor() {
        this.numeroLlantas = 4;
        this.fabricante = "Hyundai";
        this.modelo = 2022;
    }
    conducir() {
        console.log("Vehiculo esa siendo conducido");
    }
    encender() {
        console.log("El vehiculo esta encendido");
    }
    acelerar() {
        console.log("El vehiculo esta acelerando");
    }
    frenar() {
        console.log("El vehiculo esta frenar");
    }
    apagar() {
        console.log("El vehiculo esta apagado");
    }
    cargar() {
        console.log("El camion esta cargando");
    }
}
function efectuar(vehiculo) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let vehiculos = new Vehiculos();
vehiculos.encender();
vehiculos.conducir();
vehiculos.acelerar();
vehiculos.frenar();
vehiculos.apagar();
console.log(vehiculos.modelo);
console.log(vehiculos.fabricante);
console.log(vehiculos.numeroLlantas);
console.log("------------Yate--------------");
class Yate {
    constructor() {
        this.numeroAnclas = 1;
        this.numeroTurbina = 2;
        this.modelo = 2000;
        this.fabricante = "Lürssen";
    }
    navegar() {
        console.log("Yate esta siendo navegado");
    }
    encender() {
        console.log("El Yate esta encendido");
    }
    acelerar() {
        console.log("El Yate esta acelerando");
    }
    frenar() {
        console.log("El Yate esta frenar");
    }
    apagar() {
        console.log("El Yate esta apagado");
    }
}
function realizar(vehiculo) {
    vehiculo.navegar();
    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let yate = new Yate();
yate.navegar();
yate.encender();
yate.acelerar();
yate.frenar();
yate.apagar();
console.log(yate.numeroAnclas);
console.log(yate.numeroTurbina);
console.log(yate.fabricante);
console.log(yate.modelo);
console.log("------------Velero--------------");
class Velero {
    constructor() {
        this.numeroAnclas = 3;
        this.numeroTurbina = 0;
        this.modelo = 1990;
        this.fabricante = "Day Charter";
    }
    navegar() {
        console.log("Velero esta siendo navegado");
    }
    encender() {
        console.log("El Velero esta encendido");
    }
    acelerar() {
        console.log("El Velero esta acelerando");
    }
    frenar() {
        console.log("El Velero esta frenar");
    }
    apagar() {
        console.log("El Velero esta apagado");
    }
}
function guiar(vehiculo) {
    vehiculo.navegar();
    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let velero = new Velero();
velero.navegar();
velero.encender();
velero.acelerar();
velero.frenar();
velero.apagar();
console.log(velero.numeroAnclas);
console.log(velero.numeroTurbina);
console.log(velero.fabricante);
console.log(velero.modelo);
console.log("------------Avion--------------");
class Avion {
    constructor() {
        this.modelo = 1983;
        this.fabricante = "Airbus";
        this.numeroHelices = 2;
    }
    pilotar() {
        console.log("El Avion esta siendo pilotado");
    }
    encender() {
        console.log("El Avion esta encendido");
    }
    acelerar() {
        console.log("El Avion esta acelerando");
    }
    frenar() {
        console.log("El Avion esta frenar");
    }
    apagar() {
        console.log("El Avion esta apagado");
    }
}
function volar(vehiculo) {
    vehiculo.pilotar();
    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let avion = new Avion();
avion.pilotar();
avion.encender();
avion.acelerar();
avion.frenar();
avion.apagar();
console.log(avion.numeroHelices);
console.log(avion.fabricante);
console.log(avion.modelo);
console.log("------------Avioneta--------------");
class Avioneta {
    constructor() {
        this.modelo = 2014;
        this.fabricante = "BOEING COMPANY";
        this.numeroHelices = 1;
    }
    pilotar() {
        console.log("El Avioneta esta siendo pilotado");
    }
    encender() {
        console.log("El Avioneta esta encendido");
    }
    acelerar() {
        console.log("El Avioneta esta acelerando");
    }
    frenar() {
        console.log("El Avioneta esta frenar");
    }
    apagar() {
        console.log("El Avioneta esta apagado");
    }
}
function maniobrar(vehiculo) {
    vehiculo.pilotar();
    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let avioneta = new Avion();
avioneta.pilotar();
avioneta.encender();
avioneta.acelerar();
avioneta.frenar();
avioneta.apagar();
console.log(avioneta.numeroHelices);
console.log(avioneta.fabricante);
console.log(avioneta.modelo);
