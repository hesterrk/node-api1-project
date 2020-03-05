// implement your API here
//Functions in file: find, findById, insert, update, remove

const express = require("express")
const server = express()
server.use(express.json());

const db = require('./data/db');


//Add first data: function find --> gets all users,  assign variable

server.get('/', (req, res) => {
    res.json({message: 'test'})

})


const port = 8000

server.listen(port, () => {
    console.log(`Server stated at ${port}`)
})