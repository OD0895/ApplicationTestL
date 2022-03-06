const express = require('express');

const TodoService = require('../services/todo-list');

function todosApi(app){
    const router = express.Router();
	app.use('/api/todos', router);

    const todoService = new TodoService();

	router.get('/',
		async function (req, res, next) {
			const { tags } = req.query;
			try {
				const todosList = await todoService.getListTodo({ tags });
				res.status(200).json({
					todosList,
					message: 'todos listed',
				});
			} catch (err) {
				next(err);
			}
		}
	);

    router.post(
		'/',
		async function (req, res, next) {
			const { body: todo } = req;
			try {
				const createTodoId = await todoService.createTodo({ todo });
				res.status(201).json({
					data: createTodoId,
					message: 'todo created',
				});
			} catch (err) {
				next(err);
			}
		}
	);


	router.delete(
		'/:todoId',
		async function (req, res, next) {
			const { todoId } = req.params;
			try {
				const deletedTodoId = await todoService.deleteTodo({ todoId });
				res.status(200).json({
					data: deletedTodoId,
					message: 'todo deleted',
				});
			} catch (err) {
				next(err);
			}
		}
	);
    

}

module.exports = todosApi;