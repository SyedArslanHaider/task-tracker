const express = require('express');
const app = express();
import {allTasks} from './data/tasks.js';
const port = process.env.PORT || 3333;

// ...existing code...
app.use(express.json());

app.get('/tasks', (req, res) => {
	res.json(allTasks);
});

app.post('/tasks', (req, res) => {
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
