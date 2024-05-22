const Todos = require("../models/todoSchema");
const asyncHandle = require("express-async-handler");

const createTodo = asyncHandle(async (req, res) => {
  const { title, description, isCompleted } = req.body;

  if (!title || !description || !isCompleted) {
    res.status(400);
    throw new Error("Todos Connot Be Created");
  }

  const addTodo = await Todos.create({
    title,
    description,
    isCompleted,
  });

  res.json(addTodo);
});

// single todo

const readTodo = asyncHandle(async (req, res) => {
  const todo = await Todos.findById(req.params.id);

  if (!todo) {
    res.status(401);
    throw new Error("Todo Not Found");
  }

  res.json(todo).status(200);
});

// all Todo
const getTodos = asyncHandle(async (req, res) => {
  const todos = await Todos.find();

  if (!todos) {
    res.status(401);
    throw new Error("Todos Not Found");
  }

  res.json(todos);
});

// delete

const remove = asyncHandle(async (req, res) => {
  const remove = await Todos.findByIdAndDelete(req.params.id);

  if (!remove) {
    res.status(401);
    throw new Error("Todo Connot Be Deleted");
  }

  res.json({ success: true });
});

const updateTodo = asyncHandle(async (req, res) => {
  const updated = await Todos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updated) {
    res.status(401);
    throw new Error("Todos Connot be Updated");
  }

  res.json(updated);
});

module.exports = { createTodo, readTodo, remove, updateTodo, getTodos };
