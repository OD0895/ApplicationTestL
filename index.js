const express = require('express');
const app = express();
const cors = require('cors');

const { config } = require('./src/config/');

const applicationTestApi = require('./src/routes/applicationtest');
const todosApi = require('./src/routes/todo-list');
const authApi = require('./src/routes/auth');

const {
    logErrors,
    errorHandler,
    wrapErrors
  } = require('./src/utils/middleware/errorHandlers.js');

 const notFoundHandler = require('./src/utils/middleware/notFoundHandler');


app.use(cors());

app.use(express.json());

authApi(app);
applicationTestApi(app);
todosApi(app);


//Catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});