"use strict";
/*class Estudiante{
    private _nombre: string = "Andres";
    private _cedula: number = 126902438;
    private _numeroMatricula: number = 1;
    private _curso: string = "Tercero";

   public get nombre(){
       return this._nombre;
   }
   public set nombre(nombre:string){
       this._nombre = nombre;
   }
   public get cedula(){
       return this._cedula;
   }
   public set cedula(cedula:number){
       this._cedula = cedula;
   }
   public get numeroMatricula(){
       return this._numeroMatricula;
   }
   public set numeroMatricula(numeroMatricula: number){
       this._numeroMatricula = numeroMatricula;
   }
   public get curso(){
       return this._curso;
   }
   public set curso(curso:string){
       this._curso = curso;
   }
}

let estudiante = new Estudiante();
estudiante.nombre = "Andres";
estudiante.cedula = 1726902438;
estudiante.numeroMatricula = 1;
console.log("Nombre: " + estudiante.nombre);
console.log("Numero CI: " + estudiante.cedula);
console.log("Numero de Matricula: " + estudiante.numeroMatricula);
console.log("Su curso es: " + estudiante.curso);

class Estudiante1{
    nombre: string;
    semestre: number;
    cursos: string;

    constructor(nombre:string, semestre:number, curso: string){
        this.nombre = nombre;
        this.semestre = semestre;
        this.cursos = curso;
    }
    public get curso(){
        return this.cursos;
    }
    public set curso(curso:string){
        this.cursos = curso;
    }
}

let estudiante1 = new Estudiante1("Andres", 1, "Primero");
estudiante1.nombre = "Andres";
estudiante1.curso = "Primero";
estudiante1.semestre = 1;

console.log("Curso comprado: "+ estudiante1.curso);

*/
class Estudiante3 {
    constructor() {
        this._nombre = "Andres";
        this._semestre = 2;
        this._curso = "Primero";
    }
    set semestre(semestre) {
        if (semestre < 1 || semestre > 8) {
            throw new Error('Lo sentimos, este curso es válido para estudiantes de 8° semestre');
        }
        this._semestre = semestre;
    }
}
let estudiante3 = new Estudiante3();
estudiante3.semestre = 12;
