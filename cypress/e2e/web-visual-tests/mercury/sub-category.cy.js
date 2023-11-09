/// <reference types="cypress" />
import '@percy/cypress'

import header from "../../../pageObjects/header"
import subcategory from "../../../pageObjects/subcategoryPage"

describe('Visual tests for Subcategory-laundry page', () => {

  beforeEach(() => {
    cy.fixture('web-test-data.json').then((globalAccess) => {
      globalThis.config = globalAccess
    })
  })

  it('Range Carousel Component', () => {

    header.visitPage()
    // cy.setCookie('AppServiceAuthSession', globalThis.config.nuxtEcomCoookie)
    cy.visit('/' + globalThis.config.subcategoryLaundryPageUrl)
    header.acceptCookiesClick()
    cy.wait(5000)

    cy.percySnapshot('subcategory-Laundry-rangesCarousel-Ultimate');
    subcategory.clickRangesCarouselControl()
    cy.percySnapshot('subcategory-Laundry-rangesCarousel-Advanced');

  })

  it('Card Carousel Component', () => {

    header.visitPage()
    // cy.setCookie('AppServiceAuthSession', globalThis.config.nuxtEcomCoookie)
    cy.visit('/' + globalThis.config.subcategoryLaundryPageUrl)
    header.acceptCookiesClick()

    subcategory.getCardCarouselIntoScrollView()
    cy.percySnapshot('subcategory-Laundry-cardCarousel-1');
    // cy.wait(3000)
    subcategory.clickCardCarouselControl(0)

    subcategory.getCardCarouselIntoScrollView()
    cy.percySnapshot('subcategory-Laundry-cardCarousel-2');
    // cy.wait(3000)

    subcategory.clickCardCarouselControl(1)
    subcategory.getCardCarouselIntoScrollView()
    cy.percySnapshot('subcategory-Laundry-cardCarousel-3');
    // cy.wait(3000)

    subcategory.clickCardCarouselControl(1)
    subcategory.getCardCarouselIntoScrollView()
    cy.percySnapshot('subcategory-Laundry-cardCarousel-4');
    // cy.wait(3000)
  })
})

