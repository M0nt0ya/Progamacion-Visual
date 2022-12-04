export class Persona {
    nombre:string;
    cedula:number;
    constructor (nombre:string, cedula:number) {
    this.nombre=nombre;
    this.cedula=cedula;
}
    mostrarPersona(){
        console.log("Nombre: "+ this.nombre + "Cedula: "+ this.cedula);
    }
    saludar(){
        console.log("Les Saluda Estudiante de Desarrollo De Software");
    }
}