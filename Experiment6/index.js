const express = require('express');
const app = express();
const port = 3000;
//middleware
app.use(express.json());

//In-memory data
let students = [
    {
        id: 1,
        name: "Rahul",
        course: "B.Tech",
        branch:"CSE"
    },
    {
        id: 2,
        name: "Priya",
        course: "B.Tech",
        branch:"ECE"
    },
];

app.get('/students',(req,res) => {
    res.json(students);
});

app.get('/students/:id',(req,res) => {
    const id = Number(req.params.id);
    const student = students.find(
        student => student.id == id
    );
    if(!student){
        return res.status(404).json({
            message: "Student not found"
        });
    }
    res.json(student);
})

app.post('/students',(req,res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course,
        branch: req.body.branch
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

app.put('/students/:id',(req,res) => {
    const id = Number(req.params.id);
    const student = students.find(
        student => student.id === id
    );

    if(!student){
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;
    student.branch = req.body.branch;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

app.delete('/students',(req,res) => {
    students = [];

    res.status(201).json({
        message: "Successfully deleted"
    });
});

app.delete('/students/:id',(req,res) => {
    const id = Number(req.params.id);
    const studentIndex = students.findIndex(
        student => student.id === id
    );

    if(studentIndex === -1){
        return res.status(404).json({
            message: "Student not found"
        });
    }
    const deletedstudent = students.splice(
        studentIndex,1
    );

    res.status(201).json({
        message: "Student successfully deleted"
    });
});

//start server
app.listen(port,() => {
    console.log(
        `Server running on http://localhost:${port}`
    )
})