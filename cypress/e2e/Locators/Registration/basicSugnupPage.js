export class BasicSignupPage{

name                            ={}
nationality                     ={}
countryOfResidence              ={}
referralcode                    ={}
permanentResidentRadioButton    ={}
foreignerRadioButton            ={}
mobileNumber                    ={}
emailAddress                    ={}
usCitizenOrGreenCardHolderYes   ={}
usCitizenOrGreenCardHolderNo    ={}
iAgreeCheckBox                  ={}
privacyPolicyLink               ={}
accountOpeningAgreementLink     ={}
platformAgreementLink           ={}
basicSignupNextStepButton       ={}
basicSignupBackButton           ={}

signupAsSingaporeCitizen(){
    cy.get(this.name).type("")
    cy.get(this.nationality).select("Singapore")
    cy.get(this.countryOfResidence).type("Singapore")
    cy.get(this.referralcode).type("")
    cy.get(this.permanentResidentRadioButton).check()
    cy.get(this.mobileNumber).type("")
    cy.get(this.emailAddress).type("")
    cy.get(this.usCitizenOrGreenCardHolderNo).check()
    cy.get(this.iAgreeCheckBox).check()
    cy.get(this.basicSignupNextStepButton).click()
    
}

signupAsForeignCitizen(){
    cy.get(this.name).type("")
    cy.get(this.nationality).select("India")
    cy.get(this.countryOfResidence).type("India")
    cy.get(this.referralcode).type("")
    cy.get(this.permanentResidentRadioButton).check()
    cy.get(this.mobileNumber).type("")
    cy.get(this.emailAddress).type("")
    cy.get(this.usCitizenOrGreenCardHolderNo).check()
    cy.get(this.iAgreeCheckBox).check()
    cy.get(this.basicSignupNextStepButton).click()
}

signupAsUSCitizen(){
    cy.get(this.name).type("")
    cy.get(this.nationality).select("United States Of America")
    cy.get(this.countryOfResidence).type("United States of America")
    cy.get(this.referralcode).type("")
    cy.get(this.permanentResidentRadioButton).check()
    cy.get(this.mobileNumber).type("")
    cy.get(this.emailAddress).type("")
    cy.get(this.usCitizenOrGreenCardHolderYes).check()
    cy.get(this.iAgreeCheckBox).check()
    cy.get(this.basicSignupNextStepButton).click()
}


}