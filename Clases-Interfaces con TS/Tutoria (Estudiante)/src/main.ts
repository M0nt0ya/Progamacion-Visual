import { Student } from "./entities/student";

let students: Student[] = [];

function addStudent(): void {
    let currentStudent: Student = {
        fullName: (<HTMLInputElement>document.getElementById("fullName")).value,
        identification: parseInt((<HTMLInputElement>document.getElementById("identification")).value),
        direction: (<HTMLInputElement>document.getElementById("direction")).value,
        enrollment: parseInt((<HTMLInputElement>document.getElementById("enrollment")).value),
        level: (<HTMLInputElement>document.getElementById("level")).value,

    }
    students.push(currentStudent);
    console.log(students)
}
