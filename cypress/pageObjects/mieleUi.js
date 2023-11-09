/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable unicorn/no-array-callback-reference */
/// <reference types="cypress" />
const BTN_HIDE_STORIES_PANEL = "button[type=\"button\"]";

const Mieleui = {
  clickHideStoryPanel() {
    cy.get(BTN_HIDE_STORIES_PANEL).then(($btn) => {
      const buttonText = $btn.text()
      if (buttonText.includes('Hide settings panel')) {
        cy.get(BTN_HIDE_STORIES_PANEL).contains('Hide settings panel').click()
      }
    })
  },
};

export default Mieleui;
