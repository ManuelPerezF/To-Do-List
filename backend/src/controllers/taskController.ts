import { Task } from '../interfaces/task';
import { IDBServices } from '../databases/types/dbServices';

export class TaskController {
    dbService: IDBServices;

    constructor(dbService: IDBServices) {
        this.dbService = dbService;
    }

    async getTasks(): Promise<Task[]> {
        return this.dbService.getTasks();
    }

    async getTaskById(id: string): Promise<Task | null> {
        const task = await this.dbService.getTaskById(id);
        return task ? task : null;
    }

    async createTask(task: Task): Promise<Task> {
        return this.dbService.createTask(task);
    }

    async deleteTask(id: string): Promise<void> {
        await this.dbService.deleteTask(id);
    }
}