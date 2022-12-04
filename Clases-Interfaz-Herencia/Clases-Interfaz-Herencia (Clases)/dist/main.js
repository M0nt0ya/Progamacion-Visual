var Camion = /** @class */ (function () {
    function Camion() {
        this.numeroLlantas = 8;
        this.modelo = 2020;
        this.fabricante = "Casa Vaca";
    }
    Camion.prototype.conducir = function () {
        console.log("Vehiculo esa siendo conducido");
    };
    Camion.prototype.encender = function () {
        console.log("El vehiculo esta encendido");
    };
    Camion.prototype.acelerar = function () {
        console.log("El vehiculo esta acelerando");
    };
    Camion.prototype.frenar = function () {
        console.log("El vehiculo esta frenar");
    };
    Camion.prototype.apagar = function () {
        console.log("El vehiculo esta apagado");
    };
    Camion.prototype.cargar = function () {
        console.log("El camion esta cargando");
    };
    return Camion;
}());
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
var camion = new Camion();
camion.encender();
camion.conducir();
camion.acelerar();
camion.frenar();
camion.apagar();
console.log(camion.fabricante);
console.log(camion.modelo);
console.log(camion.numeroLlantas);
/*camioneta
vehiculo

yate
velero

avion
avioneta*/ 
