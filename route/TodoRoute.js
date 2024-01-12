import { Router } from "express";
import { addTodo, getAllTodo,getOneTodo,updateTodo,deleteTodo } from "../controller/TodoController.js";
const router = Router();

router.post("/addTodo",addTodo);
router.get("/getAllTodo",getAllTodo);
router.get("/getOneTodo/:todo_id",getOneTodo)
router.put("/updateTodo/:todo_id",updateTodo)
router.delete("/deleteTodo/:todo_id",deleteTodo)
export default router;
