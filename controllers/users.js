const uuid = require('uuid')
const users = require('../data/users')
const getUsers = (req,res) => {
    res.send(users)
}

const getUser = async (req,res) => {
    try{
        const {id} = req.params
        const result = users.find(user => user.id === +id)
        res.send(result)
    }catch (error) {
        res.status(404).log(error)
    }
}

const addUser = (req,res) =>{
    try{
        const {name,age} = req.body
        const user = {
            id: uuid.v4(),
            name,
            age
        }
        users.push(user)
        res.code(200).send(users)
    }catch (e) {
        res.code(404).send('Bad request')
    }
}
const deleteUser = (req,res) =>{
    try{
        const {id} = req.body
        const idx = users.findIndex(user => user.id === id)
        if(idx !== -1) {
            users.splice(idx, 1)
            res.send({message: 'Success delete'})
        }
        res.code(400).send('User not found')
    }catch (e) {
        res.code(404).send('Bad request')
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params
        const idx = users.findIndex(user => user.id === +id)
        if(idx !== -1){
            const updateUsers = users.splice(idx,1,req.body)
            res.code(200).send(updateUsers)
        }
        res.code(400).send('User not found')
    }catch (e) {
        res.code(400).send('Bad request')
    }

}
module.exports = {getUser,getUsers,addUser,deleteUser,updateUser}