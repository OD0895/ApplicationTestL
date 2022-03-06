const MongoLib = require('../lib/mongo');

class TodoService {
  constructor() {
    this.collection = 'todo-list';
    this.mongoDB = new MongoLib();
  }

  async getListTodo({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const todos = await this.mongoDB.getAll(this.collection, query);
    return todos || [];
  }

  async getTodo({ todoId }) {
    const todo = await this.mongoDB.get(this.collection, todoId);
    return todo || {};
  }

  async createTodo({ todo }) {
    const createTodoId = await this.mongoDB.create(this.collection, todo);
    return createTodoId;
  }

  async updateTodo({ todoId, todo } = {}) {
    const updatedTodoId = await this.mongoDB.update(
      this.collection,
      todoId,
      todo
    );
    return updatedTodoId;
  }

  async deleteTodo({ todoId }) {
    const deletedTodoId = await this.mongoDB.delete(this.collection, todoId);
    return deletedTodoId;
  }
}

module.exports = TodoService;