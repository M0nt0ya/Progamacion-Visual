var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, cedula, direccion, edad) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.direccion = direccion;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Cedula: " + this.cedula);
        console.log("Direccion: " + this.direccion);
        console.log("Edad: " + this.edad);
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, cedula, direccion, edad, cargo, horario) {
        var _this = _super.call(this, nombre, cedula, direccion, edad) || this;
        _this.cargo = cargo;
        _this.horario = horario;
        return _this;
    }
    Empleado.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Cargo= " + this.cargo);
    };
    return Empleado;
}(Persona));
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, cedula, direccion, edad, tipoCliente) {
        var _this = _super.call(this, nombre, cedula, direccion, edad) || this;
        _this.tipoCliente = tipoCliente;
        return _this;
    }
    return Cliente;
}(Persona));
var empleado = new Empleado("Andres", 1726903520, "Calderon", 19, "Gerente", "Lunes/Viernes");
var cliente = new Cliente("Andres", 1726903520, "Calderon", 19, "VIP");
empleado.imprimir();
// console.log(empleado);
// console.log(cliente);
