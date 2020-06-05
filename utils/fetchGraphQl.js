const fetch = require("node-fetch");
const url = process.env.GRAPH_QL_API_URL;

const callQuery  = async function(query, variables) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

        },
        body: JSON.stringify({
            query: query,
            variables: variables
        }),
    }).catch(err => console.log(err.message))

    if(!response.status > 200){
        throw new Error("Not found");
    }

   return await response.json();
}

module.exports = callQuery;