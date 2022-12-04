class Estudiante {
   private _nombre:string ="Andres";
   private _cedula:number = 1726902438;
   private _numeroMatricula: number = 1;
   private _curso: string = "Tercero";

   public get nombre(){
    return this._nombre
}
   public set nombre(nombre: string){
    this._nombre =nombre;
}

public get cedula(){
    return this._cedula
}
public set cedula(cedula: number){
    this._cedula =cedula;}



public get numeroMatricula(){
    return this._numeroMatricula
}
public set numeroMatricula(numeroMatricuola: number){
    this._numeroMatricula = numeroMatricuola;
}


public get curso(){
    return this._curso
}
public set cursor(curso: string){
    this._curso = curso;
}
}
