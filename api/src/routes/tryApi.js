const axios = require('axios');
const { apikey } = process.env
module.exports = {
    // Listado de razas
    list: async () => {
        const tuVieja = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
        return tuVieja.data
    }
}