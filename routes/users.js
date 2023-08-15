const users = require("../data/users");

const {getUsers,getUser, addUser, deleteUser,updateUser} = require('../controllers/users')

const UserSchema = {
    type: 'object',
    properties:{
        id: {type:'number'},
        name: {type:'string'},
        age: {type:'number'}
    }
}

const getUsersOpt = {
    schema: {
        response: {
            200 : {
                type: 'array',
                users: UserSchema
            }
        }
    },
    handler: getUsers
}

const getUserOpt = {
    schema: {
        response: {
            200: UserSchema
        }
    },
    handler: getUser
}

const addUserOpt = {
    schema:{
        body:{
            type: 'object',
            required: ['name','age'],
            properties: {
                name: {type: 'string'},
                age: {type: 'number'}
            }
        },
        response:{
            201: UserSchema
        }
    },
    handler: addUser
}
const deleteUserOpt = {
    schema:{
        body:{
            type: 'object',
            required: ['id'],
            properties: {
                message: {type: 'string'},
            }
        },
        response:{
            200: UserSchema
        }
    },
    handler: deleteUser
}

const updateUserOpt = {
    schema: {
        response: {
            200: UserSchema
        }
    },
    handler: updateUser
}
function usersRoutes(fastify,options,done) {

    fastify.get('/users', getUsersOpt)

    fastify.get('/users/:id', getUserOpt)

    fastify.post('/users', addUserOpt)

    fastify.delete('/users', deleteUserOpt)

    fastify.put('/users/:id', updateUserOpt)

    done()
}

module.exports = usersRoutes