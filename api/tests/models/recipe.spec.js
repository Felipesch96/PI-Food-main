const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe('Recipe model',async () => {
      it('should contain attributes : id, name , resume, healthScore, steps', async () => {
        const recipe = await Recipe.findOne({where:{name:'prueba'}})
        expect(recipe.dataValues).to.have.own.property('id');
        expect(recipe.dataValues).to.have.own.property('name');
        expect(recipe.dataValues).to.have.own.property('resume');
        expect(recipe.dataValues).to.have.own.property('healthScore');
        expect(recipe.dataValues).to.have.own.property('steps');
      })
      it('property resume must be string',async()=>{
        const recipe = await Recipe.findOne({where:{name:'prueba'}})
        expect(recipe.dataValues.resume).to.be.a('string');
      })
      
    })
  })
