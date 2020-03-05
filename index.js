// implement your API here
//Functions in file: find, findById, insert, update, remove

const express = require("express");
const server = express();
server.use(express.json());

let db = require("./data/db");

//GET: add first data: .find()--> gets all users

server.get("/api/users", (req, res) => {

  db.find()
    .then(d => {
      res.status(200).json(d);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "The users information could not be retrieved."});
    });
});

//GET: specific user: `/api/users/:id`

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    // const user = db.find(us => us.id == id)
    
    
    db.findById(id).then(us => {
        if(us) {
            res.status(201).json(us)
        } else {
            res.status(404).json({message: "The user with the specified ID does not exist."})
            
        }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({errorMessage: "The user information could not be retrieved."})
        })
    })

    







const port = 8000;

server.listen(port, () => {
  console.log(`Server stated at ${port}`);
});
