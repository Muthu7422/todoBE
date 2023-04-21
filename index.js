const express = require('express');
const app = express()
const PORT = 3000;

// app.use('taskList', require('./route/taskList'))

app.listen(PORT, ()=>{
    console.log("Server connected..");
})
app.get('*', (req, res)=>{
    res.send({
        "message" : "api not found"
    })
})

app.post('/', (req, res)=>{
    try {
        const taskArray = [
            {
                "id": 1,
                "task": "Task 1"
            },
            {
                "id": 2,
                "task": "Task 2"
            },
            {
                "id": 3,
                "task": "Task 3"
            },
        ]
        res.send(taskArray)
    } catch (error) {
        res.sendStatus(500).send({"error" : "Failed to read"})
    }
})