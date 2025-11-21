const { getItemsOpts, postItemOpts, deleteItemOpts, updateItemOpts } = require("../models/item.model");
const { getItems, addItem, deleteItem, updateItem } = require("../controllers/item.controller");

async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
        return { hello: 'world'};
    });

    // Använder bind iställer för handler.

    // Hämtar alla items. 
    fastify.get('/items', getItemsOpts, getItems.bind(fastify));

    // Lägger till ett item.
    fastify.post('/item', postItemOpts, addItem.bind(fastify));

    // Raderar ett item.
    fastify.delete('/item', deleteItemOpts, deleteItem.bind(fastify));

    // Uppdaterar ett item.
    fastify.put('/item', updateItemOpts, updateItem.bind(fastify));
}

module.exports = routes;