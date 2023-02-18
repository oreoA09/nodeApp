const express = require('express');
require("dotenv").config();

const app = express();
	
//GET method route
// app.get('/', function (req, res) {
//     res.send('Get request to the homepage');
// });

// app.get('/', function (req, res){
// res.send("Hello world")
// })

// app.get('/two', function (req, res){
// res.send("PAGE TWO")
// })

//POST method route
app.post('/', function (req, res) {
    res.send('Post request to the hmoepage');
});


// app.get('/todos', (req, res)=>{
    //     fs.readFile('./store/todos.json','utf-8', (err, data) => {
    //         if(err){
    //             return res.status(500).send('sorry')
    //         }
            
    //         const todos = JSON.parse(data)
    //         return res.json({todos : todos})
    //     })
    // })
    
app.listen(process.env.PORT);