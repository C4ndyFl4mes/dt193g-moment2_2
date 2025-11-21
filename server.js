const fastify = require("fastify")({ logger: true });

require('dotenv').config();

fastify.register(require("./config/db"));
fastify.register(require("./routes/item.route"));

fastify.listen({ port: 5000 }, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    console.log(`Server is now running at http://localhost:5000`);
});