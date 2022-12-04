interface vehiculo{
    modelo: string;
    fabricante:string;

    encender():void;
    acelerar():void;
    frenar():void;
    apagar():void;
}

interface vehiculoTerrestre {
    numeroLlantas: number;
    conducir():void;

    encender():void;
    acelerar():void;
    frenar():void;
    apagar():void;
}
interface vehiculoMaritimo{
    numeroTurbina: number;
    numeroAnclas: number;
    navegar():void;

    encender():void;
    acelerar():void;
    frenar():void;
    apagar():void;
}

interface vehiculoAereo {
    numeroHelices: number;
    pilotar():void;
    
    encender():void;
    acelerar():void;
    frenar():void;
    apagar():void;
}

console.log("------------Camion--------------")
class Camion implements vehiculoTerrestre{
    numeroLlantas: number = 8;
    modelo:number = 2020;
    fabricante:string="Casa Vaca";
    conducir():void{
        console.log("El Camion esta siendo conducido");
    }
    encender():void{
        console.log("El Camion esta encendidiendo");
    }
    acelerar():void{
        console.log("El Camion esta acelerando");
    }
    frenar():void{
        console.log("El Camion esta frenando");
    }
    apagar():void{
        console.log("El Camion esta apagado");
    }
}
function procesar(vehiculo:vehiculoTerrestre) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let camion = new Camion();
camion.encender()
camion.conducir()
camion.acelerar()
camion.frenar()
camion.apagar()
console.log (camion.fabricante);
console.log (camion.modelo);
console.log (camion.numeroLlantas);

console.log("------------Camioneta--------------")
class Camioneta implements vehiculoTerrestre{
    numeroLlantas: number = 4;
    fabricante:string="Chevrolet";
    modelo:number = 2010;
    conducir():void{
        console.log("La Camioneta esta siendo conducida");
    }
    encender():void{
        console.log("La Camioneta esta encendidiendo");
    }
    acelerar():void{
        console.log("La Camioneta esta acelerando");
    }
    frenar():void{
        console.log("La Camioneta esta frenando");
    }
    apagar():void{
        console.log("La Camioneta esta apagada");
    }
}
function ejecutar(vehiculo:vehiculoTerrestre) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let camioneta = new Camioneta();
camioneta.encender()
camioneta.conducir()
camioneta.acelerar()
camioneta.frenar()
camioneta.apagar()
console.log (camioneta.modelo)
console.log (camioneta.fabricante);
console.log (camioneta.numeroLlantas);


console.log("------------Vehiculo--------------")
class Vehiculos implements vehiculoTerrestre{
    numeroLlantas: number = 4;
    fabricante:string="Hyundai";
    modelo:number = 2022;
    conducir():void{
        console.log("Vehiculo esa siendo conducido");
    }
    encender():void{
        console.log("El vehiculo esta encendido");
    }
    acelerar():void{
        console.log("El vehiculo esta acelerando");
    }
    frenar():void{
        console.log("El vehiculo esta frenar");
    }
    apagar():void{
        console.log("El vehiculo esta apagado");
    }
    cargar():void{
        console.log("El camion esta cargando")
    }
}
function efectuar(vehiculo:vehiculoTerrestre) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let vehiculos = new Vehiculos();
vehiculos.encender()
vehiculos.conducir()
vehiculos.acelerar()
vehiculos.frenar()
vehiculos.apagar()
console.log (vehiculos.modelo);
console.log (vehiculos.fabricante);
console.log (vehiculos.numeroLlantas);

console.log("------------Yate--------------")
class Yate implements vehiculoMaritimo{
    numeroAnclas: number = 1;
    numeroTurbina: number = 2;
    modelo:number = 2000;
    fabricante:string="Lürssen";
    navegar():void{
        console.log("Yate esta siendo navegado");
    }
    encender():void{
        console.log("El Yate esta encendido");
    }
    acelerar():void{
        console.log("El Yate esta acelerando");
    }
    frenar():void{
        console.log("El Yate esta frenar");
    }
    apagar():void{
        console.log("El Yate esta apagado");
    }
}
function realizar(vehiculo:vehiculoMaritimo) {
    vehiculo.navegar();

    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let yate = new Yate();
yate.navegar()
yate.encender()
yate.acelerar()
yate.frenar()
yate.apagar()
console.log (yate.numeroAnclas);
console.log (yate.numeroTurbina);
console.log (yate.fabricante);
console.log (yate.modelo);

console.log("------------Velero--------------")
class Velero implements vehiculoMaritimo{
    numeroAnclas: number = 3;
    numeroTurbina: number = 0;
    modelo:number = 1990;
    fabricante:string="Day Charter";
    navegar():void{
        console.log("Velero esta siendo navegado");
    }
    encender():void{
        console.log("El Velero esta encendido");
    }
    acelerar():void{
        console.log("El Velero esta acelerando");
    }
    frenar():void{
        console.log("El Velero esta frenar");
    }
    apagar():void{
        console.log("El Velero esta apagado");
    }
}
function guiar(vehiculo:vehiculoMaritimo) {
    vehiculo.navegar();

    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let velero = new Velero();
velero.navegar()
velero.encender()
velero.acelerar()
velero.frenar()
velero.apagar()
console.log (velero.numeroAnclas);
console.log (velero.numeroTurbina);
console.log (velero.fabricante);
console.log (velero.modelo);

console.log("------------Avion--------------")
class Avion implements vehiculoAereo{
    modelo:number = 1983;
    fabricante:string="Airbus";
    numeroHelices:number= 2;
    pilotar():void{
        console.log("El Avion esta siendo pilotado");
    }
    encender():void{
        console.log("El Avion esta encendido");
    }
    acelerar():void{
        console.log("El Avion esta acelerando");
    }
    frenar():void{
        console.log("El Avion esta frenar");
    }
    apagar():void{
        console.log("El Avion esta apagado");
    }
}
function volar(vehiculo:vehiculoAereo) {
    vehiculo.pilotar();

    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let avion = new Avion();
avion.pilotar()
avion.encender()
avion.acelerar()
avion.frenar()
avion.apagar()
console.log (avion.numeroHelices);
console.log (avion.fabricante);
console.log (avion.modelo);



console.log("------------Avioneta--------------")
class Avioneta implements vehiculoAereo{
    modelo:number = 2014;
    fabricante:string="BOEING COMPANY";
    numeroHelices:number= 1;
    pilotar():void{
        console.log("El Avioneta esta siendo pilotado");
    }
    encender():void{
        console.log("El Avioneta esta encendido");
    }
    acelerar():void{
        console.log("El Avioneta esta acelerando");
    }
    frenar():void{
        console.log("El Avioneta esta frenar");
    }
    apagar():void{
        console.log("El Avioneta esta apagado");
    }
}
function maniobrar(vehiculo:vehiculoAereo) {
    vehiculo.pilotar();

    vehiculo.encender();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let avioneta = new Avion();
avioneta.pilotar()
avioneta.encender()
avioneta.acelerar()
avioneta.frenar()
avioneta.apagar()
console.log (avioneta.numeroHelices);
console.log (avioneta.fabricante);
console.log (avioneta.modelo);