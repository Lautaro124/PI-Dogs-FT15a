const axios = require('axios');
const { apikey } = process.env
const { Dog }= require('../db')

module.exports = {
    list: async () => {

        const apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
        let dogListApi = apiCall.data.map(e =>{
            return { name: e.name }
        })
        let dogListDB = await Dog.findAll()

        let dogList = [...dogListApi, ...dogListDB]
        return dogList
    },
    namesFilter: async (parameter) =>{

        const apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
        console.log(apiCall.data)
        let dogListApi = await apiCall.data.filter((objeto) =>
            objeto.name.toLowerCase().includes(parameter.toLowerCase())
        );
        

        let dogListDB = await Dog.findAll(e => e.name.toLowerCase().includes(parameter.toLowerCase()))   
        
        let dogList = [...dogListApi, ...dogListDB]
        return dogList
    }
}