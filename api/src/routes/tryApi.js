const axios = require('axios');
const { apikey } = process.env
const { Dog, Temperament}= require('../db')

const list= async () => {

    let apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
    let dogListApi = apiCall.data.map(e =>{
        
        let arr = e.temperament && e.temperament.split(',').map(e => e.trim())
        return { name: e.name,  temperament: arr , image: e.image.url, id: e.id}
    })
    
    let dogListDB = await Dog.findAll()
    let dogList = [...dogListApi, ...dogListDB]

    return dogList
}

const namesFilter= async (parameter) =>{

    let apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${parameter}`)
    let dogListApi = await apiCall.data

    let dogListDB = await Dog.findAll()   
    dogListDB = dogListDB.filter((objeto) =>
        objeto.name.toLowerCase().includes(parameter.toLowerCase())
    );

    let dogList = [...dogListApi, ...dogListDB]
    
    return dogList
}

const  shearchId= async (parameter) => {

    let arr = {}

    let apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
    let dogListApi = await apiCall.data
    dogListApi = dogListApi.forEach((objeto) =>{
        if(objeto.id.toString() === parameter){ 
            let save = objeto.temperament && objeto.temperament.split(',').map(e => e.trim())     
            arr = {
                name: objeto.name,
                id: objeto.id,
                height: objeto.height.metric,
                weight: objeto.weight.metric,
                life_span: objeto.life_span,
                temperament: save,
                image: objeto.image.url
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
                temperament: Temperamen.data.map(e => {

                }),
            }
        }
    });

    return arr
}

const  temperaments= async() => {

    let lista = await list()

    let arr = []
    lista.map(e => {
        if(e.temperament){
            arr = [...e.temperament, ...arr];
        }         
    })

    let ars = [...new Set(arr)].sort()
    return ars
}

const setTemperament = async() => {
    let list = await temperaments()
    
    let save = list.map((e) => { 
        if(e){    
            Temperament.create({name: e})  
        }    
    })
}
module.exports = { list,shearchId,namesFilter, setTemperament }