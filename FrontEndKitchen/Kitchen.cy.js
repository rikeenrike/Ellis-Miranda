describe('User Routes Test', () => {
  it('GET users route', () => {
      cy.viewport(1920, 1080)
      cy.visit('http://localhost:5173/cashier/menu/drinks')
      cy.request('GET','http://localhost:5173/cashier/menu/drinks').then((response)=>{
          
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length.above(0)
          cy.get('.email').type('ADMINTEST', { delay: 200 }) 
    cy.get('.password').type('1234', { delay: 200 })
    cy.get('#loginbtn').click()
    cy.wait(5000)
    cy.get('[href="/kitchen"]').click()
    cy.wait(2000)
    cy.get('.flex-row > :nth-child(1) > .justify-between.items-center > .group').click()
    cy.wait(5000)
    cy.get('.bg-primary').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .justify-between.items-center > .px-4').click()
    cy.wait(2000)
    cy.get('.bg-primary').click()
    cy.wait(1000)
    cy.get('#ready > .flex-wrap > :nth-child(1) > .justify-between.items-center > .px-4').click()
    cy.wait(1000)
    cy.get('.bg-primary').click()
  })
})
})