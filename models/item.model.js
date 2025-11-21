// Schemat för item.
const Item = {
    type: 'object',
    required: ["name", "rating", "isDubbed"],
    properties: {
        _id: { type: 'string' },
        name: { type: 'string', minLength: 1, maxLength: 200 },
        rating: { type: 'number', minimum: 1, maximum: 10 },
        isDubbed: { type: 'boolean' }
    }
};

// Hämta items.
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    }
};

// Lägga till item.
const postItemOpts = {
    schema: {
        response: {
            201: Item
        }
    }
};

// Radera item.
const deleteItemOpts = {
    schema: {
        response: {
            200: Item
        }
    }
};

// Uppdatera item.
const updateItemOpts = {
    schema: {
        response: {
            200: Item
        }
    }
};

module.exports = {
    getItemsOpts,
    postItemOpts,
    deleteItemOpts,
    updateItemOpts
};