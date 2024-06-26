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
      cy.get('[href="/menu-management"]').click()
      cy.wait(2000)
      cy.get('.mr-0.relative > .font-sora').click()
      cy.wait(2000)
      cy.get('.mr-0.relative > .font-sora').type('caffe latte', { delay: 200 })
      cy.wait(2000)
      cy.get('.mr-0.relative > .font-sora').clear()
      cy.wait(2000)
      cy.get('#addsub').click()
      cy.get('#subcatname').click()
      cy.get('#subcatname').type('Cold Drinks', { delay: 200 })
      cy.wait(2000)
      cy.get('.addsub > .my-10 > div > .w-full').click()
      cy.wait(5000)
      cy.get('#pv_id_4_0_content > .p-5 > .-space-x-5 > .mx-5 > .bg-offwhite').click()
      cy.get('.productname').click()
      cy.get('.productname').type('cold coffee', { delay: 200 })
      cy.get('#unitprice').type('10', { delay: 200 })
      cy.get('#stock').type('100', { delay: 200 })
      cy.wait(2000)
      cy.get('.add > .my-10 > div > .w-full').click()
      cy.wait(5000)
      cy.get('#pv_id_4_0_content > .p-5 > .-space-x-5 > :nth-child(3) > .h-full > .w-16').click()
      cy.get('.my-10 > .justify-between > .group').click()
      cy.wait(2000)
      cy.get('.flex-col > .flex > .bg-primary').click()
      cy.reload()
    })
})
})