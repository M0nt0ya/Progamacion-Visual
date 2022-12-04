"use strict";
class Persona {
    constructor(nombre, cedula, direccion, edad) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.direccion = direccion;
        this.edad = edad;
    }
    imprimir() {
        console.log("Nombre: " + this.nombre);
        console.log("Cedula: " + this.cedula);
        console.log("Direccion: " + this.direccion);
        console.log("Edad: " + this.edad);
    }
}
class Empleado extends Persona {
    constructor(nombre, cedula, direccion, edad, cargo, horario) {
        super(nombre, cedula, direccion, edad);
        this.cargo = cargo;
        this.horario = horario;
    }
}
class Cliente extends Persona {
    constructor(nombre, cedula, direccion, edad, tipoCliente) {
        super(nombre, cedula, direccion, edad);
        this.tipoCliente = tipoCliente;
    }
}
let empleado = new Empleado("Andres", 1726903520, "Calderon", 19, "Gerente", "Lunes/Viernes");
let cliente = new Cliente("Andres", 1726903520, "Calderon", 19, "VIP");
console.log(empleado);
console.log(cliente);
