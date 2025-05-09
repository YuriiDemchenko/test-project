class newsLetterPage {

    get newsLetterPageHeader() { return $("#hero-section-brand-heading") }
    get emailInput() { return $("//input[@type='email']") }
    get signupButton() { return $("//a, 'Sign up')]") }
    get countySelectorButton() { return $('#country') }
    get newsletterCheckbox() { return $('#gated-agree-marketingEmailOptin1') }
    get newsLetterSubmitButton() { return $("//button[@type='submit']") }


    async setEmail(email) {
        await this.emailInput.setValue(email);
    }

    async selectCountry() {
        await this.countySelectorButton.click();
        await browser.keys(['ArrowDown', 'ArrowDown', 'Enter']);
    }

    async clickCheckbox() {
        await this.newsletterCheckbox.click();
    }

    async clickSubmitButton() {
        await this.newsLetterSubmitButton.click();
    }


}
export default new newsLetterPage();