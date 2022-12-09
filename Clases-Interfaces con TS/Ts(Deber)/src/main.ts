import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";
import { GradeBookSetup } from "./entities/gradeBookSetup.entity";
import { Activity } from "./entities/activity.entity";
import { Course } from "./entities/course.entity";
import { SummaryBookSetup } from "./entities/summaryBookSetup";

enum Area {
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
}



let students: Student[] = [];

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    }
    students.push(currentStudent);
    console.table(students);
}


let teachers: Teacher[] = [];

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}

let activity: Activity[] = [];
function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity"),
    }
    activity.push(currentActivity);
    console.table(activity)
    initSelect();
}
let course: Course[] = [];
function addCourse(): void {
    let currentCourse: Course = {
        course: readFormHtml("name-grade"),
    }
    course.push(currentCourse);
    console.table(course)
    initSelect();
}


let gradesBookSetup: GradeBookSetup[] = [];

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}

let summaryBookSetup: SummaryBookSetup[] = [];

function addSummaryBookSetup(): void {
    let currentSummaryBookSetup: SummaryBookSetup = {
        student: readFormHtml("student-summaryBook"),
        course: readFormHtml("course-summaryBook"),
        note: parseInt(readFormHtml("grade-summaryBook")),
        teacher: readFormHtml("teacher-summaryBook"),
    }
    summaryBookSetup.push(currentSummaryBookSetup);
    console.table(summaryBookSetup);
}



function initSelect(): void {

    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area);
    areas.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value;
            option.text = value,
                area.add(option);
        }
    );
    let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
    document.querySelectorAll("#course-gradebook option").forEach(option => option.remove());
    course.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.course;
            option.text = value.course,
                courseGradeBook.add(option);
        }
    );
    let courseSummaryBook = document.getElementById("course-summaryBook") as HTMLSelectElement;
    document.querySelectorAll("#course-summaryBook option").forEach(option => option.remove());
    course.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.course;
            option.text = value.course,
                courseSummaryBook.add(option);
        }
    );



    let studentSummary = document.getElementById("student-summaryBook") as HTMLSelectElement;
    document.querySelectorAll("#student-summaryBook option").forEach(option => option.remove())
    students.forEach(
        (estudiante) => {
        let option = document.createElement("option");
            option.value = estudiante.fullName;
            option.text = estudiante.fullName,
            studentSummary.add(option)
        }
    );
    let teacherSummary = document.getElementById("teacher-summaryBook") as HTMLSelectElement;
    document.querySelectorAll("#teacher-summaryBook option").forEach(option => option.remove())
    teachers.forEach(
        (profe) => {
        let option = document.createElement("option");
            option.value = profe.fullName
            option.text = profe.fullName,
            teacherSummary.add(option)
        }
    );




    let activityGradebook = document.getElementById("activity-gradebook") as HTMLSelectElement;
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove())
    activity.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.name;
            option.text = value.name,
                activityGradebook.add(option);
        }
    )
}

initSelect();




function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id))!.value;
}






