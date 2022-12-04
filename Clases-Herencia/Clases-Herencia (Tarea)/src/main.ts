class Empresa{
    protected nombreEmpresa: string; 
    protected direccion: string; 
    constructor(nombreEmpresa:string, direccion:string){
        this.nombreEmpresa=nombreEmpresa;
        this.direccion=direccion;
    }
    imprimir(){        
        console.log("Nombre de la Empresa: "+this.nombreEmpresa);
        console.log("Direccion de la Empresa: " + this.direccion);
    }
}

class Empleado extends Empresa{
    protected nombre: string; 
    protected cedula: number;
    private cargo: string;
    private horario: string;
    constructor(nombreEmpresa: string, direccion:string,nombre:string, cedula:number, cargo:string,horario:string,){
        super(nombreEmpresa,direccion);
        this.nombre=nombre;
        this.cedula=cedula;
        this.cargo=cargo;
        this.horario=horario;
    }
    imprimir(){  
        super.imprimir();      
        console.log("Nombre:"+this.cargo);
        console.log("Cedula:"+this.cargo);
        console.log("Cargo:"+this.cargo);
        console.log("Horario:"+this.horario);
    }
    public salario (horasDia:number, mensualDia:number, horasExtra:number, valorHora:number):
    number{
        return ((horasDia * mensualDia)+ horasExtra)*valorHora;
    }
}
let empleado = new Empleado ("AdVersus","Calderon","Andres", 1726909524, "Admin", "Sabado/Lunes");
empleado.imprimir();
console.log("El salario es de: " + empleado.salario(2,2,2,2) + "$")