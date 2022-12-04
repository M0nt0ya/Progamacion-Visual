"use strict";
class Estudiante {
    constructor() {
        this._nombre = "Andres";
        this._cedula = 1726902438;
        this._numeroMatricula = 1;
        this._curso = "Tercero";
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get numeroMatricula() {
        return this._numeroMatricula;
    }
    set numeroMatricula(numeroMatricuola) {
        this._numeroMatricula = numeroMatricuola;
    }
    get curso() {
        return this._curso;
    }
    set cursor(curso) {
        this._curso = curso;
    }
}
