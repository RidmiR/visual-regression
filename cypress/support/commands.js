import mieleComponent from "../fixtures/miele-ui-component-data.json";
import mieleuiObject from "../../cypress/e2e/pageObjects/mieleUi";

/**
 * This method is used to visit the Miele UI URL
 * @param  {string} component - Miele Ui Component names
 */
Cypress.Commands.add("visitMieleUi", (component) => {
  cy.visit(mieleComponent.baseUrl + component);
  mieleuiObject.clickHideStoryPanel();
});
