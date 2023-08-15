const fastify = require('fastify')({logger: true})

const PORT = 3000

fastify.register(require('./routes/users'))

const start = async () => {
    try {
         await fastify.listen({port:PORT})
    }catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start().then( r => console.log(`connect PORT -> ${PORT}`))