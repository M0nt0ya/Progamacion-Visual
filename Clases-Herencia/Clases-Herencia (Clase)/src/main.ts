class Persona {
    nombre: string;
    cedula: number;
    direccion: string;
    edad: number;

    constructor(nombre:string, cedula:number, direccion:string, edad:number) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.direccion = direccion;
        this.edad = edad;
    }
 
    imprimir(){
        console.log("Nombre: " + this.nombre);
        console.log("Cedula: " + this.cedula);
        console.log("Direccion: " + this.direccion);
        console.log("Edad: " + this.edad);
    }
}
class Empleado extends Persona {
    private cargo: string;
    private horario:string;
    constructor(nombre:string, cedula:number, direccion:string, edad:number ,cargo:string, horario:string){
        super( nombre, cedula, direccion, edad);
        this.cargo=cargo;
        this.horario=horario;
    }
    imprimir(){
        super.imprimir();
    console.log("Cargo= " + this.cargo);    
    }
}


class Cliente extends Persona {
    private tipoCliente: string;
    constructor(nombre:string, cedula:number, direccion:string, edad:number, tipoCliente:string){
        super( nombre, cedula, direccion, edad);
        this.tipoCliente=tipoCliente;
}
}
let empleado = new Empleado ("Andres", 1726903520 ,"Calderon", 19,"Gerente","Lunes/Viernes");
let cliente = new Cliente ("Andres", 1726903520 ,"Calderon", 19,"VIP");

empleado.imprimir();


// console.log(empleado);
// console.log(cliente);