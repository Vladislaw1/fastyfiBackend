const uuid = require('uuid')
const User = require('../models/user.model')

const getUsers = async (req,res) => {
    const users = await User.find()
    res.send(users)
}

const getUser = async (req,res) => {
    try{
        const {id} = req.params
        const user = await User.findById(id)
        res.send(user)
    }catch (error) {
        res.status(404).log(error)
    }
}

const addUser = async (req,res) =>{
    try{
        const user = new User(req.body)
        const result = await user.save()
        res.code(200).send(result)
    }catch (e) {
        res.code(404).send(e)
    }
}
const deleteUser = async (req,res) =>{
    try{
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.code(203).send({id,message: 'User delete'})
    }catch (e) {
        res.code(404).send('Bad request')
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id,req.body,{
            new: true
        })
        res.send(user)
    }catch (e) {
        res.code(400).send('Bad request')
    }

}
module.exports = {getUser,getUsers,addUser,deleteUser,updateUser}