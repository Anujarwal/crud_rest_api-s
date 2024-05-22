const express = require("express");
const {
  createTodo,
  readTodo,
  remove,
  updateTodo,
  getTodos,
} = require("../Controller/todoController");

const router = express.Router();

// create
router.post("/", createTodo);

// all Todos
router.get("/", getTodos);

// single Todo

router.get("/:id", readTodo);

// delete

router.delete("/:id", remove);

// update

router.put("/:id", updateTodo);

module.exports = router;
