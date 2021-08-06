const axios = require('axios');
const { apikey } = process.env
const { Dog }= require('../db')


module.exports = {
    list: async () => {

        let apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
        let dogListApi = apiCall.data.map(e =>{
            return { name: e.name }
        })

        let dogListDB = await Dog.findAll()
        let dogList = [...dogListApi, ...dogListDB]

        return dogList
    },
    namesFilter: async (parameter) =>{

        let apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${parameter}`)
        let dogListApi = await apiCall.data

        let dogListDB = await Dog.findAll()   
        dogListDB = dogListDB.filter((objeto) =>
        objeto.name.toLowerCase().includes(parameter.toLowerCase())
        );

        let dogList = [...dogListApi, ...dogListDB]
        
        return dogList
    },
    shearchId: async (parameter) => {

        let arr = {}

        let apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
        let dogListApi = await apiCall.data
        dogListApi = dogListApi.forEach((objeto) =>{
            if(objeto.id.toString() === parameter){      
                arr = {
                    name: objeto.name,
                    id: objeto.id,
                    height: objeto.height,
                    weight: objeto.weight,
                    life_span: objeto.life_span,
                    temperaments: objeto.temperaments,
                }
            }
        });

        let dogListDB = await Dog.findAll({include: Temperament})   
        dogListDB = dogListDB.forEach((objeto) =>{
            if(objeto.id.toString() === parameter){
                arr = {
                    name: objeto.name,
                    id: objeto.id,
                    height: objeto.height,
                    weight: objeto.weight,
                    life_span: objeto.life_span,
                    temperaments: objeto.temperaments,
                }
            }
        });

        return arr
    },
    temperaments: async() => {

        let apiList = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)     
        let objeto = await apiList.data.map(e => e.temperament)
        
        let tem = objeto.map(e => e && e.split(', '))
        return tem
    }
}