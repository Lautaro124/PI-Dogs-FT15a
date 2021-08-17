const axios = require('axios');
const { apikey } = process.env
const { Dog, Temperament}= require('../db')

const list= async () => {

    let apiCall = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
    let dogListApi = apiCall.data.map(e =>{
        let arr = e.temperament && e.temperament.split(',').map(e => e.trim())
        
        let convertW = e.weight.metric.split(' ')
        let resultW = parseInt(convertW[0]) + parseInt(convertW[2]) / 2

        let convertH = e.height.metric.split(' ')
        let resultH = parseInt(convertH[0]) + parseInt(convertH[2]) / 2

        return { name: e.name,  temperaments: arr , image: e.image.url, id: e.id ,weight: resultW, height: resultH}
    })
    
    let dogListDB = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: [ 'name' ],
            through: { attributes: [] }
        }
    })


    let dogList = [...dogListApi, ...dogListDB];

    return dogList
}

const namesFilter= async (parameter) =>{

    let dogListDB = await list()  
    dogListDB = dogListDB.filter((objeto) =>
        objeto.name.toLowerCase().includes(parameter.toLowerCase())
    );
    
    return dogListDB
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
                temperaments: save,
                image: objeto.image.url
            }
        }
    });

    let dogListDB = await Dog.findAll({include: {model: Temperament}})   
    dogListDB = dogListDB.map((objeto) =>{
        if(objeto.id.toString() === parameter){
            arr = {
                name: objeto.name,
                id: objeto.id,
                height: objeto.height,
                weight: objeto.weight,
                life_span: objeto.life_span,
                temperaments: Temperaments.data.map(e => {
                    return e + ' '
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
        if(e.temperaments){
            arr = [...e.temperaments, ...arr];
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