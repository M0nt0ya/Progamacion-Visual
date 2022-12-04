"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, cedula) {
        this.nombre = nombre;
        this.cedula = cedula;
    }
    mostrarPersona() {
        console.log("Nombre: " + this.nombre + "Cedula: " + this.cedula);
    }
    saludar() {
        console.log("Les Saluda Estudiante de Desarrollo De Software");
    }
}
exports.Persona = Persona;
