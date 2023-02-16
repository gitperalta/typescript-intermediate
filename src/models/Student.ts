import { Course } from "./Course";

export class Student {
  // Class' properties
  name: string;
  lastName?: string;
  courses: Course[];
  private ID: string = "123456";

  // Constructor
  constructor(name: string, courses: Course[], lastName?: string) {
    // Initialization of properties
    this.name = name;
    if (lastName) this.lastName = lastName;
    this.courses = courses;
  }

  get studiedHours(): number {
    let studiedHours: number = 0;
    this.courses.forEach((course: Course) => {
      studiedHours += course.hours;
    });
    return studiedHours;
  }

  set studentId(id: string) {
    this.ID = id;
  }
}
