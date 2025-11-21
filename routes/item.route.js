
async function routes (fastify, options) {
    const collection = fastify.mongo.client.db(process.env.DATABASE).collection("items");

    fastify.get('/', async (request, reply) => {
        return { hello: 'world'};
    });
    fastify.get('/items', async (request, reply) => {
        const result = await collection.find().toArray();
        if (result.length === 0) {
            throw new Error("Inga dokument hittades!");
        }
        return {
            items: result
        };
    });
}

module.exports = routes;