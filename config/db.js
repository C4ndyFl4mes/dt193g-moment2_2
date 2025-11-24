const fastifyPlugin = require("fastify-plugin");

// Ansluter till databas.
async function connectDB(fastify, options) {
    try {
        await fastify.register(require("@fastify/mongodb"), {
            forceClose: true,
            url: process.env.URI
        });

        // En genväg för att slippa skriva fastify.mongo.client... flera gånger.
        fastify.decorate("itemsCollection", null);
        fastify.after(() => {
            fastify.itemsCollection = fastify.mongo.client
                .db(process.env.DATABASE)
                .collection("items");
        });
    } catch (error) {
        fastify.log.error({ err }, "db plugin: failed to register @fastify/mongodb");
        throw error;
    }
}

module.exports = fastifyPlugin(connectDB);