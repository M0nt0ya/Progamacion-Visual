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
}

interface vehiculoAereo {
    numeroHelices: number;
    pilotar():void;
}



class Camion implements vehiculoTerrestre{
    numeroLlantas: number = 8;
    modelo:number = 2020;
    fabricante:string="Casa Vaca";
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






/*camioneta
vehiculo 

yate 
velero

avion
avioneta*/