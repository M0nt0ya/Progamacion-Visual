import { Person } from "./Person";

export interface Student extends Person{
    enrollment:number;
    level:string;
}