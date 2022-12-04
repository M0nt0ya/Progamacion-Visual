"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
function addStudent() {
    let currentStudent = {
        fullName: readformHtml("fullName"),
        identification: parseInt(readformHtml("identification")),
        direction: readformHtml("direction"),
        enrollment: parseInt(readformHtml("enrollment")),
        level: (readformHtml("level")),
    };
    students.push(currentStudent);
    console.table(students);
}
let teachers = [];
function addTeacher() {
    let currentTeacher = {
        fullName: readformHtml("fullName1"),
        identification: parseInt(readformHtml("identification1")),
        direction: readformHtml("direction1"),
        title: readformHtml("title"),
        matter: readformHtml("matter")
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
let grades = [];
function addGrade() {
    let currentGrade = {
        gradeName: readformHtml("gradeName"),
        hour: parseInt(readformHtml("hour")),
        parallel: readformHtml("parallel")
    };
    grades.push(currentGrade);
    console.table(grades);
}
function readformHtml(id) {
    return (document.getElementById(id).value);
}
//Actividad
//Libro de Califcaciones
