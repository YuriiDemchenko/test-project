class copilotPage {

    get copilotPageHeader() { return $("#hero-section-brand-heading") }
    get copilotForfreeHeader() { return $("//h1[contains(text(), 'Try Copilot Pro for 30 days free')]") }
    get copilotForfreeButton() {
        return $("//form//button[@type='submit']")
    }


    async clickCopilotForfreeButton() {
        await this.copilotForfreeButton.click();
    }


}
export default new copilotPage();