const fetchGQl = require("./../../utils/fetchGraphQl");
const query = require("./qlQuery")

const fetchRecord = async id => {
    return await fetchGQl(query, { id })
}

module.exports = fetchRecord;