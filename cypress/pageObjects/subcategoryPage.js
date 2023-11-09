/// <reference types="cypress" />

const rangesCarouselWrapper = "div[class='controls__wrapper']"
const rangesCarouselControlBtn = "button[class='controls__statusButton--inner']"
const onScrollTextComponent = "div[class='onScrollText']"
const cardCarouselControlComponent = "div[class='cardCarousel dcf-ctx-light']"

class subcategoryPage {
  static clickRangesCarouselControl() {
    cy.get(rangesCarouselWrapper).within(() => {
      cy.get(rangesCarouselControlBtn).eq(0).click()
      cy.scrollTo('top')
    });
  }

  static getCardCarouselIntoScrollView() {
    cy.get(onScrollTextComponent).scrollIntoView({ offset: { top: 800, left: 0 } })
    cy.wait(1000)
  }

  static clickCardCarouselControl(index) {
    cy.get(cardCarouselControlComponent).within(() => {
      cy.get(rangesCarouselControlBtn).eq(index).click()
    });
  }
}
export default subcategoryPage
