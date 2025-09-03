/*Pruebas en PetStore API

API: /pet
Tests: en APIS Petstore
Realizado por: alex-moreano

*/

describe('**Pruebas en flujos de apis para petstore) **', ()=>{
    const url = 'https://petstore.swagger.io/v2';
    const id = 123;
    const body = {
        id,
        category: { id: 0, name: 'gatos' },
        name: 'Socrates',
        photoUrls: [
          'https://upload.wikimedia.org/wikipedia/commons/1/12/Siamese_cat.jpg'
        ],
        tags: [
          { id: 1, name: 'cat' },
          { id: 2, name: 'gato' },
          { id: 3, name: 'siames' },
          { id: 4, name: 'macho' },
          { id: 5, name: 'venta' }
        ],
        status: 'available'
    };

    it('AGREGAR MASCOTA', () => {
      //Agregar gato
      cy.request({
        method: 'POST',
        url: `${url}/pet`,
        body
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.id).to.eq(body.id);
      });
    });

    it('CONSULTAR MASCOTA', () => {
      //constulat mascota por id y verifico id + el nombre
      cy.request({
        method: 'GET',
        url: `${url}/pet/${id}`
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.id).to.eq(id);
      });
    });
    
    it('ACTUALIZAR MASCOTA', () => {
      const updateBody = { 
        id, 
        name: 'Silvestre', 
        status: 'sold' 
      };
      //update de la mascota envio en el body el nombre y status
      cy.request({
        method: 'PUT',
        url: `${url}/pet`,
        body: updateBody
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.id).to.eq(id);
        expect(resp.body.name).to.eq('Silvestre');
        expect(resp.body.status).to.eq('sold');
      });
    });

    it('CONSULTAR MASCOTA POR STATUS', () => {
      //consulta por status sold
      cy.request({
        method: 'GET',
        url: `${url}/pet/findByStatus?status=sold`,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.status).to.eq(200);
        const ids = (resp.body || []).map((p) => p.id);
          expect(ids).to.include(id);      
        });
    });
});