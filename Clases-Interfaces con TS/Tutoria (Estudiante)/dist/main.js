"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
function addStudent() {
    let currentStudent = {
        fullName: document.getElementById("fullName").value,
        identification: parseInt(document.getElementById("identification").value),
        direction: document.getElementById("direction").value,
        enrollment: parseInt(document.getElementById("enrollment").value),
        level: document.getElementById("level").value,
    };
    students.push(currentStudent);
    console.log(students);
}
