describe('portfolio test', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('have active class', () => {
    
    cy.get('.active').should('not.be.visible')


  })


  it('test links in header', () => {
    
    cy.contains('Profil').click()
    cy.url().should('include', 'Profil')

    cy.contains('Projets').click()
    cy.url().should('include', 'Projets')

    cy.contains('Compétences').click()
    cy.url().should('include', 'Competences')

    cy.contains('Contact').click()
    cy.url().should('include', 'Contact')

    cy.contains('Accueil').click()
    cy.url().should('eq', '/')

  })

    it('test links in footer', () => {
    
    cy.contains('Profil').click()
    cy.url().should('include', 'Profil')

    cy.contains('Compétences').click()
    cy.url().should('include', 'Competences')

    cy.contains('Contact').click()
    cy.url().should('include', 'Contact')
    
    
    
  })

  
  it('test links in footer that redirect to other site', () => {

    
    cy.url().should('include','/')
    cy.contains('Github').click()
    cy.url().should('include', 'github')
    
    cy.visit('/')

    cy.url().should('include','/')
      cy.contains('Linkedin').click()
      cy.url().should('include', 'linkedin')
    
    cy.visit('/')
  
  })
  

  it('test download button', () => {
    
    cy.contains('Télécharger mon CV').click()
    cy.readFile(Cypress.config("downloadsFolder")+"/CV_Nicolas_Martins.pdf").should("exist")
    
  })


  it('test contact form', () => {

    cy.visit('/Contact')



    
    
    

    cy.get('input[name="nom"]').type('Martins')

    cy.get('input[name="nom"]').should('have.value', 'Martins')


    cy.get('input[name="prenom"]').type('Nicolas')

    cy.get('input[name="prenom"]').should('have.value', 'Nicolas')


    cy.get('input[name="email"]').type('nicolas@mail.mail')

    cy.get('input[name="email"]').should('have.value', 'nicolas@mail.mail')


    cy.get('input[name="objet"]').type('Objet message.')

    cy.get('input[name="objet"]').should('have.value', 'Objet message.')


    cy.get('textarea[name="message"]').type('Bonjour, ceci est un message.')

    cy.get('textarea[name="message"]').should('have.value', 'Bonjour, ceci est un message.')
    
    cy.get('#consent').check()

    cy.get('#consent').click()

    cy.contains('Envoyer').click()
    
  })


  it('test fail', () => {
    

      if (cy.url().should('include','/Contact')) {
      return
    }
        cy.contains('Contact').click()

        cy.url().should('include', '/Contact')
    
  })



  
})

