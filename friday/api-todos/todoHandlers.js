const Todo = require("./todoLib.js");

// GET method
const getAllTodos = (req, res) => {
  const todos = Todo.getAll();
  res.json(todos);
};

// POST method
const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;

  const newTodo = Todo.addOne(task, completed, dueDate);

  if (newTodo) {
    res.json(newTodo);
  } else {
    res.status(500).json({ message: "Failed to create to do list" });
  }
};

// GET id method
const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const todo = Todo.findById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "To do list not found" });
  }
};

// PUT method
const updateTodo = (req, res) => {
  const todoId = req.params.todoId;

  const { task, completed, dueDate } = req.body;

  const updatedTodo = Todo.updateOneById(todoId, { task, completed, dueDate });

  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "To do list not found" });
  }
};

// DELETE method
const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;

  const isDeleted = Todo.deleteOneById(todoId);

  if (isDeleted) {
    res.json({ message: "To do list deleted successfully" });
  } else {
    res.status(404).json({ message: "To do list not found" });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
