const fastify = require("fastify")({ logger: true });
const port = process.env.PORT | 3000;
require('dotenv').config();

fastify.register(require("@fastify/cors"), {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
});

fastify.register(require("./config/db"));
fastify.register(require("./routes/item.route"));

fastify.listen({ port: port, host: '0.0.0.0' }, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    console.log(`Server is now running.`);
});