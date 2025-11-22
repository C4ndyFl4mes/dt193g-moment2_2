/**
 * För att göra om _id till id.
 * @param {object} doc 
 * @returns 
 */
function transformID(doc) {
    const { _id, ...rest } = doc;
    return { id: _id.toString(), ...rest };
}

module.exports = { transformID };