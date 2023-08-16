const fastify = require('fastify')({logger: true})
const mongoose = require('mongoose');
require('dotenv').config()

const userRoutes = require('./routes/users')

fastify.register(userRoutes,{prefix: 'api/v1/users'})
mongoose.connect(process.env.MONGO_URL);

const start = async () => {
    try {
         await fastify.listen({port: process.env.PORT})
    }catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start().then( r => console.log(`connect PORT -> ${process.env.PORT}`))