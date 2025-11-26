const fastify = require("fastify")({ logger: true });
const port = process.env.PORT | 3000;
require('dotenv').config();

//Så att API:et kan kallas överallt.
fastify.register(require("@fastify/cors"), {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
});

fastify.register(require("./config/db")); // Databasanslutningen
fastify.register(require("./routes/item.route")); // Routes.

// Startar server
fastify.listen({ port: port, host: '0.0.0.0' }, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    console.log(`Server is now running.`);
});