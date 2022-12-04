"use strict";
class Empresa {
    constructor(nombreEmpresa, direccion) {
        this.nombreEmpresa = nombreEmpresa;
        this.direccion = direccion;
    }
    imprimir() {
        console.log("Nombre de la Empresa: " + this.nombreEmpresa);
        console.log("Direccion de la Empresa: " + this.direccion);
    }
}
class Empleado extends Empresa {
    constructor(nombreEmpresa, direccion, nombre, cedula, cargo, horario) {
        super(nombreEmpresa, direccion);
        this.nombre = nombre;
        this.cedula = cedula;
        this.cargo = cargo;
        this.horario = horario;
    }
    imprimir() {
        super.imprimir();
        console.log("Nombre:" + this.cargo);
        console.log("Cedula:" + this.cargo);
        console.log("Cargo:" + this.cargo);
        console.log("Horario:" + this.horario);
    }
    salario(horasDia, mensualDia, horasExtra, valorHora) {
        return ((horasDia * mensualDia) + horasExtra) * valorHora;
    }
}
let empleado = new Empleado("AdVersus", "Calderon", "Andres", 1726909524, "Admin", "Sabado/Lunes");
empleado.imprimir();
console.log("El salario es de: " + empleado.salario(2, 2, 2, 2) + "$");
