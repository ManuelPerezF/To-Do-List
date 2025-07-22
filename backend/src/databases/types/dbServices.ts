import { Task } from '../../interfaces/task';

export interface IDBServices {
    getTasks(): Promise<Task[]>;
    getTaskById(id: string): Promise<Task | null>;
    createTask(task: Task): Promise<Task>;
    deleteTask(id: string): Promise<void>;

}