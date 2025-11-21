const fastify = require("fastify")({logger: true});

fastify.get("/", (request, reply) => {
    reply.send({
        hello: "world"
    });
});

fastify.listen({ port: 5000 }, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    console.log(`Server is now running at http://localhost:5000`);
});