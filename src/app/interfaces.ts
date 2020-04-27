export interface Task {
  title: string;
  interval: number;
  comment?: string;
}

export interface User {
  login: string;
  password: string;
}
