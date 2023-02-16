import { ITodo, Level } from "./interfaces/ITodo";

export class Code implements ITodo {
  title: string;
  description?: string | undefined;
  completed: boolean;
  urgency?: Level | undefined;

  constructor(
    title: string,
    description: string,
    completed: boolean,
    urgency: Level
  ) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.urgency = urgency;
  }

  summary = (): string => {
    return `Programing todo ${this.title} - ${this.completed}`;
  };
}
