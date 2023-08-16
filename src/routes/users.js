const {getUsers,getUser, addUser, deleteUser,updateUser} = require('../controllers/users')

async function usersRoutes(fastify,options,done) {
    fastify.get('/', getUsers)
    fastify.get('/:id', getUser)
    fastify.post('/', addUser)
    fastify.delete('/:id', deleteUser)
    fastify.put('/:id', updateUser)

    done()
}

module.exports = usersRoutes