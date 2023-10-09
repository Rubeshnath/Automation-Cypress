export class DocToBeReadyPopup{

howDoYouHearAboutUsDropDownButton   ={}
termsAndConditionsLink              ={}
iUnderstandButton                   ={}
documenChecklistPopupCloseButton    ={}    

clickIUnderstandButton(){
    
    cy.get(this.iUnderstandButton).click()
}

clickDocumentChecklistPopupCloseButton(){
    
    cy.get(this.documenChecklistPopupCloseButton).click()
}

}
