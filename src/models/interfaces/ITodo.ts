export enum Level {
  "Informative",
  "Urgent",
  "Blocking",
}

// Interface declares the structure of the data
export interface ITodo {
  title: string;
  description?: string;
  completed: boolean;
  urgency?: Level;
  summary: () => string;
}
