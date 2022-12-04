import { Grade } from "./entities/grade";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";

let students: Student[] = [];

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readformHtml("fullName"),
        identification: parseInt(readformHtml("identification")),
        direction: readformHtml("direction"),
        enrollment: parseInt(readformHtml("enrollment")),
        level: (readformHtml("level")),

    }
    students.push(currentStudent);
    console.table(students)
}

let teachers: Teacher[] = [];

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readformHtml("fullName1"),
        identification: parseInt(readformHtml("identification1")),
        direction: readformHtml("direction1"),
        title: readformHtml("title"),
        matter: readformHtml("matter")
    }
    teachers.push(currentTeacher);
    console.table(teachers)
}

let grades: Grade[] = [];

function addGrade(): void {
    let currentGrade: Grade = {
        gradeName: readformHtml("gradeName"),
        hour: parseInt(readformHtml("hour")),
        parallel:readformHtml("parallel")
    }
    grades.push(currentGrade);
    console.table(grades)
}

function readformHtml(id:string):string{
    return((<HTMLInputElement>document.getElementById(id)).value)
}
    //Actividad
    //Libro de Califcaciones