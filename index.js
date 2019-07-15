const express = require('express'),
      taskRoutes = require('./routes/tasks'),
      bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));