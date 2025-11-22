// Schemat för item.
const Item = {
    type: 'object',
    required: ["name", "rating", "isDubbed"],
    properties: {
        id: { type: 'string' },
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
        body: Item,
        response: {
            201: {
                type: 'object',
                properties: {
                    acknowledged: { type: 'boolean' },
                    insertedId: { type: 'string' }
                }
            }
        }
    }
};

// Radera item.
const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    acknowledged: {
                        type: 'boolean'
                    },
                    deletedCount: {
                        type: 'number'
                    }
                }
            }
        }
    }
};

// Uppdatera item.
const updateItemOpts = {
    schema: {
        body: Item,
        response: {
            200: {
                type: 'object',
                properties: {
                    acknowledged: {
                        type: 'boolean'
                    },
                    modifiedCount: {
                        type: 'number'
                    },
                    upsertedId: {
                        type: ['string', 'null']
                    },
                    upsertedCount: {
                        type: 'number'
                    },
                    matchedCount: {
                        type: 'number'
                    }
                }
            }
        }
    }
};

module.exports = {
    getItemsOpts,
    postItemOpts,
    deleteItemOpts,
    updateItemOpts
};