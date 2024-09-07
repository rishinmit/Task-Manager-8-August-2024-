const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const cors = require('cors');
app.use(cors());

const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7070;

app.get('/', (req,res)=>{
    res.send("Hello from rishi's server");
})
app.use(bodyParser.json());
app.use('/tasks',TaskRouter);

app.listen(PORT,()=>{
    console.log(`Server running at PORT: ${PORT}`);
})