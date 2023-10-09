export class chooseAccOpeningMethod {

    singpassMethod = {};
    documentUploadMethod = {};
    chooseAccountOpeningMethodNextStepButton = {};
    clickAllowButtonInSingpassPopup = {};

    clickSingpassMethod() {
        cy.get(this.singpassMethod).click()
        cy.get(this.chooseAccountOpeningMethodNextStepButton).click()
        if(cy.get(this.clickAllowButtonInSingpassPopup).should('be.visible')){
            cy.get(this.clickAllowButtonInSingpassPopup).click()
        }
    }

    clickDocUploadMethod(){
        cy.get(this.documentUploadMethod).click()
        cy.get(this.chooseAccountOpeningMethodNextStepButton).click()
    }
    }
    



