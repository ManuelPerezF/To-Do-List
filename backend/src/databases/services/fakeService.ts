import { Task } from '../../interfaces/task';
import { IDBServices } from '../types/dbServices';

const FakeTasks: Task[] = [
    { id: '1', title: 'Task 1',  completed: false },
    { id: '2', title: 'Task 2',  completed: false },
    { id: '3', title: 'Task 3',  completed: false }
]

export class FakeService implements IDBServices {
    public getTasks(): Promise<Task[]> {
        return Promise.resolve(FakeTasks);
    }

    public getTaskById(id: string): Promise<Task | null> {
        return Promise.resolve(FakeTasks.find(task => task.id === id) || null);
    }

    public createTask(task: Task): Promise<Task> {
        const newId = (FakeTasks.length + 1).toString();

        // Crear la nueva tarea con el id generado
        const newTask: Task = {
            id: newId,
            title: task.title,
            completed: task.completed
        };

        // Agregar la nueva tarea al arreglo
        FakeTasks.push(newTask);

        // Devolver la nueva tarea
        return Promise.resolve(newTask);
    }

    public deleteTask(id: string): Promise<void> {
        const index = FakeTasks.findIndex(task => task.id === id);
        if (index !== -1) {
            FakeTasks.splice(index, 1);
        }
        return Promise.resolve();
    }
}