module.exports = `
    query(
        $id: Int!
    ){
        record(id: $id){
            id
            title
            description

            user {
                id
                nickname
                picture
            }
        } 
    }
`