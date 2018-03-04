const TodoHandlers = require('../handlers/todo');
var express = require('express');
var router = express.Router();

router.get('/', TodoHandlers.GetAllTodos);
router.get('/user/:id', TodoHandlers.GetUserTodos);
router.post('/', TodoHandlers.AddTodo);
router.put('/:id', TodoHandlers.UpdateTodo);
router.delete('/:id', TodoHandlers.DeleteTodo);
router.post('/duplicate/:id', TodoHandlers.DuplicateTodo);

module.exports = router;