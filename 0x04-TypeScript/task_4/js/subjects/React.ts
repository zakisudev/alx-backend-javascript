namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingReact === undefined ||
        this.teacher.experienceTeachingReact <= 0
      ) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
