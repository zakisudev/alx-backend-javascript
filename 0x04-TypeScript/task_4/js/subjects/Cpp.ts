namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingC === undefined ||
        this.teacher.experienceTeachingC <= 0
      ) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
