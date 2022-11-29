const express = require('express');

// init router
const router = express.Router();
const {
    getTodos,
    getTodosCompleted,
    getTodosUncomplete,
    postTodo,
    getTodo,
    deleteTodo,
    updateTodo,
    deleteCompletedTodos,
    deleteUnCompletedTodos
} = require('../controllers/todosControllers');

// use middleware
// router.use(requireAuth);

// GET ALL
router.get('/', getTodos);

// GET ONLY COMPLATE
router.get('/completed', getTodosCompleted);

// GET ONLY UNCOMPLATE
router.get('/uncompleted', getTodosUncomplete);

// GET SINGLE
router.get('/:id', getTodo);

// POST DATA
router.post('/', postTodo);

// DELETE DATA
router.delete('/:id', deleteTodo);

// DELETE ALL COMPLETED TODOS
router.delete('/clear/completed', deleteCompletedTodos);

// DELETE ALL UNCOMPLETED TODOS
router.delete('/clear/uncompleted', deleteUnCompletedTodos);

// UPDATE DATA
router.patch('/:id', updateTodo);

module.exports = router;