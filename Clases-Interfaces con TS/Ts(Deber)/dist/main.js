"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
})(Area || (Area = {}));
let students = [];
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
let teachers = [];
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    };
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
let activity = [];
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activity.push(currentActivity);
    console.table(activity);
    initSelect();
}
let course = [];
function addCourse() {
    let currentCourse = {
        course: readFormHtml("name-grade"),
    };
    course.push(currentCourse);
    console.table(course);
    initSelect();
}
let gradesBookSetup = [];
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}
let summaryBookSetup = [];
function addSummaryBookSetup() {
    let currentSummaryBookSetup = {
        student: readFormHtml("student-summaryBook"),
        course: readFormHtml("course-summaryBook"),
        note: parseInt(readFormHtml("grade-summaryBook")),
        teacher: readFormHtml("teacher-summaryBook"),
    };
    summaryBookSetup.push(currentSummaryBookSetup);
    console.table(summaryBookSetup);
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            area.add(option);
    });
    let courseGradeBook = document.getElementById("course-gradebook");
    document.querySelectorAll("#course-gradebook option").forEach(option => option.remove());
    course.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.course;
        option.text = value.course,
            courseGradeBook.add(option);
    });
    let courseSummaryBook = document.getElementById("course-summaryBook");
    document.querySelectorAll("#course-summaryBook option").forEach(option => option.remove());
    course.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.course;
        option.text = value.course,
            courseSummaryBook.add(option);
    });
    let studentSummary = document.getElementById("student-summaryBook");
    document.querySelectorAll("#student-summaryBook option").forEach(option => option.remove());
    students.forEach((estudiante) => {
        let option = document.createElement("option");
        option.value = estudiante.fullName;
        option.text = estudiante.fullName,
            studentSummary.add(option);
    });
    let teacherSummary = document.getElementById("teacher-summaryBook");
    document.querySelectorAll("#teacher-summaryBook option").forEach(option => option.remove());
    teachers.forEach((profe) => {
        let option = document.createElement("option");
        option.value = profe.fullName;
        option.text = profe.fullName,
            teacherSummary.add(option);
    });
    let activityGradebook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
    activity.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name;
        option.text = value.name,
            activityGradebook.add(option);
    });
}
initSelect();
function readFormHtml(id) {
    return document.getElementById(id).value;
}
