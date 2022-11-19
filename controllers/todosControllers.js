// import
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL
const getTodos = async (req, res) => {
  const todos = await prisma.todos.findMany();
  res.status(200).json({
    message: `endpoint /todos${req.path} successfull`,
    data: todos,
  });
};

// GET ONLY UNCOMPLETE
const getTodosCompleted = async (req, res) => {
  const todos = await prisma.todos.findMany({
    where: {
      status: true,
    },
  });
  res.status(200).json({
    message: `endpoint /todos${req.path} successfull`,
    data: todos,
  });
};

// GET ONLY UNCOMPLETE
const getTodosUncomplete = async (req, res) => {
  const todos = await prisma.todos.findMany({
    where: {
      status: false,
    },
  });
  res.status(200).json({
    message: `endpoint /todos${req.path} successfull`,
    data: todos,
  });
};

// POST TODOS
const postTodo = async (req, res) => {
  const { todo, description } = req.body;

  // check
  if (!todo || !description) {
    return res.status(400).json({
      error: 'please provide todo and description',
    });
  }

  const newTodo = await prisma.todos.create({
    data: {
      ...req.body,
    },
  });

  res.status(200).json({
    message: `endpoint /todos${req.path} successfull`,
    data: newTodo,
  });
};

// GET SINGLE WITH ID
const getTodo = async (req, res) => {
  const { id } = req.params;

  // logic
  const todo = await prisma.todos.findFirst({
    where: {
      id,
    },
  });

  if (!todo) {
    return res.status(404).json({
      error: `No such todo with id: ${id}`,
    });
  }

  res.status(200).json({
    message: `endpoint /todos${req.path} successfull`,
    data: todo,
  });
};

// DEELETE TODO
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await prisma.todos.findFirst({
    where: {
      id,
    },
  });

  // logic
  if (!todo) {
    return res.status(404).json({
      error: `No such todo with id: ${id}`,
    });
  }

  const delTodo = await prisma.todos.delete({
    where: {
      id,
    },
  });

  res.status(200).json({
    message: `endpoint /todos${req.path} successfull`,
    data: delTodo,
  });
};

// UPDATE TODO
const updateTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await prisma.todos.findFirst({
    where: {
      id,
    },
  });

  // logic
  if (!todo) {
    return res.status(404).json({
      error: `No such todo with id: ${id}`,
    });
  }

  const updatedTodo = await prisma.todos.update({
    where: {
      id,
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).json({
    message: `endpoint /todos${req.path} successfull`,
    data: updatedTodo,
  });
};

module.exports = {
  getTodos,
  getTodosCompleted,
  getTodosUncomplete,
  postTodo,
  getTodo,
  deleteTodo,
  updateTodo,
};
