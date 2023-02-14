const todo = require("../models/todo");
const models = require("../models/index")

const ToDoRepository = models.ToDo;

const index = async (req, res) => {
  try {
    const todo = await ToDoRepository.findAll();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const read = async (req, res) => {
  try {
    const todo = await ToDoRepository.findByPk(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    const todo = await ToDoRepository.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const todo = await ToDoRepository.findByPk(req.params.id);
    await todo.update(req.body);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const remove = async (req, res) => {
  try {
    const todo = await ToDoRepository.findByPk(req.params.id);
    await todo.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { index, create, read, update, remove }