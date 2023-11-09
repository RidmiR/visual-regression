/// <reference types="cypress" />
import "@percy/cypress";
import mieleComponent from "../../fixtures/miele-ui-component-data.json";

describe("Visual regression test for Miele UI components", () => {
  const { badge } = mieleComponent.component[0]
  const { button } = mieleComponent.component[0];
  const { buttonGroup } = mieleComponent.component[0];
  const { checkbox } = mieleComponent.component[0];
  const { checkBoxGroup } = mieleComponent.component[0];
  const { chip } = mieleComponent.component[0];
  const { horizontalRule } = mieleComponent.component[0];
  const { icon } = mieleComponent.component[0];
  const { image } = mieleComponent.component[0];
  const { link } = mieleComponent.component[0];
  const { list } = mieleComponent.component[0];
  const { radioButton } = mieleComponent.component[0];
  const { radioButtonGroup } = mieleComponent.component[0];
  const { textArea } = mieleComponent.component[0];
  const { textInput } = mieleComponent.component[0];
  const { themeProvider } = mieleComponent.component[0];
  const { typography } = mieleComponent.component[0];
  const { blockExample } = mieleComponent.component[0];


  it("Verify visual test for component - " + badge, () => {
    cy.visitMieleUi(badge);
    cy.percySnapshot(badge);
  });

  it("Verify visual test for component - " + button, () => {
    cy.visitMieleUi(button);
    cy.percySnapshot(button);
  });

  // it("Verify visual test for component - " + buttonGroup, () => {
  //   cy.visitMieleUi(buttonGroup);
  //   cy.percySnapshot(buttonGroup);
  // });

  // it("Verify visual test for component - " + checkbox, () => {
  //   cy.visitMieleUi(checkbox);
  //   cy.percySnapshot(checkbox);
  // });

  // it("Verify visual test for component - " + checkBoxGroup, () => {
  //   cy.visitMieleUi(checkBoxGroup);
  //   cy.percySnapshot(checkBoxGroup);
  // });

  // it("Verify visual test for component - " + chip, () => {
  //   cy.visitMieleUi(chip);
  //   cy.percySnapshot(chip);
  // });

  // it("Verify visual test for component - " + horizontalRule, () => {
  //   cy.visitMieleUi(horizontalRule);
  //   cy.percySnapshot(horizontalRule);
  // });

  // it("Verify visual test for component - " + icon, () => {
  //   cy.visitMieleUi(icon);
  //   cy.percySnapshot(icon);
  // });

  // it("Verify visual test for component - " + image, () => {
  //   cy.visitMieleUi(image);
  //   cy.percySnapshot(image);
  // });

  // it("Verify visual test for component - " + link, () => {
  //   cy.visitMieleUi(link);
  //   cy.percySnapshot(link);
  // });

  // it("Verify visual test for component - " + list, () => {
  //   cy.visitMieleUi(list);
  //   cy.percySnapshot(list);
  // });

  // it("Verify visual test for component - " + radioButton, () => {
  //   cy.visitMieleUi(radioButton);
  //   cy.percySnapshot(radioButton);
  // });

  // it("Verify visual test for component - " + radioButtonGroup, () => {
  //   cy.visitMieleUi(radioButtonGroup);
  //   cy.percySnapshot(radioButtonGroup);
  // });

  // it("Verify visual test for component - " + textArea, () => {
  //   cy.visitMieleUi(textArea);
  //   cy.percySnapshot(textArea);
  // });

  // it("Verify visual test for component - " + textInput, () => {
  //   cy.visitMieleUi(textInput);
  //   cy.percySnapshot(textInput);
  // });

  // it("Verify visual test for component - " + themeProvider, () => {
  //   cy.visitMieleUi(themeProvider);
  //   cy.percySnapshot(themeProvider);
  // });

  // it("Verify visual test for component - " + typography, () => {
  //   cy.visitMieleUi(typography);
  //   cy.percySnapshot(typography);
  // });

  // it("Verify visual test for component - " + blockExample, () => {
  //   cy.visitMieleUi(blockExample);
  //   cy.percySnapshot(blockExample);
  // });
});
