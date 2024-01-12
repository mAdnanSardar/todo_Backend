import Todo from "../model/model.js";
import { Types } from 'mongoose';


export const addTodo= async (req, res, next) => {
    console.log(req.body.todoDescription)
    try {
      const todo = new Todo({
        _id: new Types.ObjectId(),
        todoDescription: req.body.todoDescription,
        createdAt: new Date(),
        completed: false
      })
      todo.save()
        .then(result => {
          console.log(result);
          res.status(200).json(result);
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  //getAllTODO

  export const getAllTodo= async (req, res, next) => {
    try {
      const allTodos = await find();
      res.status(200).json({
        message: "All Todos",
        data: allTodos
      })
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  //find todo by id
 export const getOneTodo= async (req, res, next) => {
    const todoId = req.params.todo_id;
    try { 
      // Check if the provided ID is a valid ObjectId
      if (!Types.ObjectId.isValid(todoId)) {
        return res.status(400).json({ error: 'Invalid Todo ID' });
      }
  
      // Find the todo by ID
      const todo = await findById(todoId);
  
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      res.status(200).json({
        data: todo,
      });
  
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
  //UPDATE TODO

 export const updateTodo=async (req, res, next) => { 
    const todoId = req.params.todo_id;
    try {
      // Check if the provided ID is a valid ObjectId
      if (!Types.ObjectId.isValid(todoId)) {
        return res.status(400).json({ error: 'Invalid Todo ID' });
      } 
  
      // Find the todo by ID
      const todo = await findById(todoId);
      // Check if the todo exists
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      // Update the todo with the new data from the request body
      todo.todoDescription = req.body.todoDescription || todo.todoDescription;
      todo.completed = req.body.completed;
  
      // Save the updated todo
      await todo.save();
  
      // Respond with a success message
      res.status(200).json({
        message: "Updated Successfully!",
        data: todo,
      });
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  //DELETE TODO

export const deleteTodo= async (req, res, next) => {
    const todoId = req.params.todo_id;
    try {
      // Check if the provided ID is a valid ObjectId
      if (!Types.ObjectId.isValid(todoId)) {
        return res.status(400).json({ error: 'Invalid Todo ID' });
      }
  
      // Find the todo by ID
      const todo = await findById(todoId);
  
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      await deleteOne({ _id: todoId })
  
      res.status(200).json({
        message: "Deleted Successfully!"
      });
  
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
  