"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    // Constructor
    constructor(name, courses, lastName) {
        this.ID = "123456";
        // Initialization of properties
        this.name = name;
        if (lastName)
            this.lastName = lastName;
        this.courses = courses;
    }
    get studiedHours() {
        let studiedHours = 0;
        this.courses.forEach((course) => {
            studiedHours += course.hours;
        });
        return studiedHours;
    }
    set studentId(id) {
        this.ID = id;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map