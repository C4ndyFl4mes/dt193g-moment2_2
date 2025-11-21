const fastifyPlugin = require("fastify-plugin");

async function connectDB(fastify, options) {
    try {
        await fastify.register(require("@fastify/mongodb"), {
            forceClose: true,
            url: process.env.URI
        });
    } catch (error) {
        fastify.log.error({ err }, "db plugin: failed to register @fastify/mongodb");
        throw error;
    }
    
}

module.exports = fastifyPlugin(connectDB);