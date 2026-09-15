// //perform crud operation on file using fs(file system) module
// const { error } = require("console");
// const fs = require("fs");
// // C - create a file and write file content
// fs.writeFile("student.txt","this is a student file",() => {
//     if(error){
//         console.log("File successfully created");
//     }
// });

// //reading a file content
// const { error } = require("console");
// const fs = require("fs");
// fs.readFile("student.txt","utf-8",(err,data) => {
//     if(err) throw err;
//     else{
//         console.log("reading a file content");
//         console.log(data);
//     }
// });

// U - update a file content
// const fs = require("fs");
// const { error } = require("console");
// fs.appendFile("student.txt", " for CSE 31 batch2", (err) => {
//     if(err){
//         console.log(err);
//     } 
//     else{
//         console.log("File successfully updated");
//     }
// });

// delete a file
const { error } = require("console");
const fs = require("fs");
fs.unlink("student.txt",(err) => {
    if(err) throw err;
    else{
        console.log("File successfully deleted")
    }
});
