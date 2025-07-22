import { Request, Response } from 'express';
import { TaskController } from '../controllers/taskController';
import { Task } from '../interfaces/task';


export class TaskHandler {

    taskController: TaskController;
    
    constructor(taskController: TaskController) {
        this.taskController = taskController;
    }

    async getTasks(req: Request, res: Response){
        try {
            const tasks = await this.taskController.getTasks();
            res.json(tasks);
        }
        catch (error){
            res.status(500).json({ error: 'Failed to fetch tasks' });
        }
    }

    async getTaskById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const task = await this.taskController.getTaskById(id);
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ error: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch task" });
        }
    }

    async createTask(req: Request, res: Response) {
        try {
            const { title, completed } = req.body;
            if (!title ) {
                return res.status(400).json({ error: "Title is required" });
            }

            const task: Task = {
                id: "", // se asignará en el
                title,
                completed: completed ?? false
            };

            const createdTask = await this.taskController.createTask(task);
            res.status(201).json(createdTask);
            } catch (error) {
                console.error("Error en createTask:", error);
                res.status(500).json({ error: "Failed to create task" });
            }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await this.taskController.deleteTask(id);
            res.status(204).send({ message: `${id}.task Task deleted successfully` });
        } catch (error) {
            console.error("Error en deleteTask:", error);
            res.status(500).json({ error: "Failed to delete task" });
        }
    }
}