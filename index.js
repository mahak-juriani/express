const express = require('express');
const app = express();

app.use(express.json());

let courses = [
    {id: 1, name: "java"},
    {id: 2, name: "javascript"},
    {id: 3, name: "python"},
];

app.get('/courses', (req, res)=>{
    res.json(courses);
})

app.post('/courses', (req, res)=>{
    console.log(req.body);

    let newCourse = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(newCourse);
    res.send(courses);
})

app.listen(3001, ()=> {
    console.log("Server started.");
})