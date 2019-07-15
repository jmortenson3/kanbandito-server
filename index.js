const express = require('express'),
      taskRoutes = require('./routes/tasks'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('./config.json');

const app = express();
const port = 3000;

mongoose.connect(config.databaseUrl, { useNewUrlParser: true });
mongoose.set('debug', true);

let db = mongoose.connection;
db.on('error', console.error.bind(console, "ERROR connecting to db"));

app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));