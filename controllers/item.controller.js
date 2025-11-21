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
    return items;
}

/**
 * Lägger till item.
 * @param {object} request 
 * @param {object} reply 
 */
async function addItem(request, reply) {

}

/**
 * Raderar ett item.
 * @param {object} request 
 * @param {object} reply 
 */
async function deleteItem(request, reply) {

}

/**
 * Uppdaterar ett item.
 * @param {object} request 
 * @param {object} reply 
 */
async function updateItem(request, reply) {

}

module.exports = {
    getItems,
    addItem,
    deleteItem,
    updateItem
};