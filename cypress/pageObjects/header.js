/// <reference types="cypress" />

const signInBtnATH = "[data-testid='dhf-header-account-btn-sign-in']"
const headerLoginListATH = "[data-testid='dhf-header-account-btn-sign-out']"
const myAccountATH = "[data-testid='dhf-header-actions-accounts']"

class header {
  static acceptCookiesClick() {
    cy.get("button[id='cu_confirmAll']").click()
  }

  static visitPage(){
    cy.visit('https://qweb.miele.co.uk/', { failOnStatusCode: false }).wait(2000)
    cy.get('body').then(($body) => {
      if ($body.find("[data-testid='dhf-header-actions-accounts']", { timeout: 10000 }).length > 0)
        cy.setCookie('AppServiceAuthSession', accessReference.nuxtUserCookie).wait(3000)
    })
  }

  static signInClick() {
    cy.get(signInBtnATH).should('be.visible').click().wait(5000)
    cy.url().should('include', '/login')
    cy.get(emailATH).eq(0).clear().type(globalThis.config.user)
    cy.get(passwordATH).clear().type(globalThis.config.password, { log: false })
  }

  static verifyLogin() {
    cy.wait(2000)
    cy.get(myAccountATH).click()
    cy.get(headerLoginListATH).should('be.visible')
  }
}
export default header
