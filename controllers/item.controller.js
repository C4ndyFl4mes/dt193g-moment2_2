const { transformID } = require("../utils/transform");

/**
 * Hämtar items.
 * @param {object} request 
 * @param {object} reply 
 * @returns 
 */
async function getItems(request, reply) {
    const items = await this.itemsCollection.find().toArray();
    if (items.length === 0) {
        throw new Error("Inga dokument hittades!");
    }
    return items.map(transformID);
}

/**
 * Lägger till item.
 * @param {object} request 
 * @param {object} reply 
 */
async function addItem(request, reply) {
    const { name, rating, isDubbed } = request.body;
    const result = await this.itemsCollection.insertOne({
        name, rating, isDubbed
    });
    if (!result) {
        throw new Error("Kunde inte lägga till dokument!");
    }
    return result;
}

/**
 * Raderar ett item.
 * @param {object} request 
 * @param {object} reply 
 */
async function deleteItem(request, reply) {
    const ObjectId = this.mongo.ObjectId;
    const id = request.params.id;
    const result = await this.itemsCollection.deleteOne({
        _id: new ObjectId(id)
    });
    if (result.deletedCount === 0) {
        throw new Error("Kunde inte radera dokumentet!");
    }
    return result;
}

/**
 * Uppdaterar ett item.
 * @param {object} request 
 * @param {object} reply 
 */
async function updateItem(request, reply) {
    const ObjectId = this.mongo.ObjectId;
    const id = request.params.id;
    const { name, rating, isDubbed } = request.body;

    const result = await this.itemsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: {
            name, rating, isDubbed
        }}
    );

    if (result.matchedCount === 0) {
        throw new Error("Kunde inte uppdatera dokumentet!");
    }
    return result;
}

module.exports = {
    getItems,
    addItem,
    deleteItem,
    updateItem
};