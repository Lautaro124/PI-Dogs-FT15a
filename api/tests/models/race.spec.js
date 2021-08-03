const { conn, Race } = require('../../src/db.js');
const { expect } = require('chai');

describe('Race model', () => {
    beforeEach(() => conn.authenticate()
    .catch((err) => {
      console.error('No se conecto a la base de datos:', err);
    }))

    describe('Validacion', () => {
        beforeEach(() => Race.sync({ force: true }));

        it('Agregar informacion correctamnete', (done) => {
            Race.create({ name: 'Puge', CharacterData: 'pasivo', ageMax: 15})
                .catch((err)=> console.log(err));
        }) 
    })  
  })