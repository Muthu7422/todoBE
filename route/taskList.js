const express = require('express');
const router = express.Router()

router.post('/', (req, res)=>{
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
        res.sendStatus(200).send({"data" : taskArray})
    } catch (error) {
        res.sendStatus(500).send({"error" : "Failed to read"})
    }
})


module.exports =router;