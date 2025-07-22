import express from "express";
import { TaskController } from "../controllers/taskController";
import { TaskHandler } from "../handlers/taskHandler";
import { FakeService } from "../databases/services/fakeService";

const router = express.Router();

const fakeService = new FakeService();
const taskController = new TaskController(fakeService);
const taskHandler = new TaskHandler(taskController);


router.get("/tasks", taskHandler.getTasks.bind(taskHandler));
router.get("/tasks/:id", taskHandler.getTaskById.bind(taskHandler));
router.post("/tasks", taskHandler.createTask.bind(taskHandler));
router.delete("/tasks/delete/:id", taskHandler.deleteTask.bind(taskHandler));

export default router;
