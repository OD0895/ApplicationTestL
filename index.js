const express = require('express');
const app = express();
const cors = require('cors');

const applicationTestApi = require('./src/routes/applicationtest');
const todosApi = require('./src/routes/todo-list');

app.use(cors());

app.use(express.json());

applicationTestApi(app);
todosApi(app);

app.listen(3002, () => {
    console.log('Server is up on port 3002!');
});