class signupPage {

    get signupTitle() { return $('.signup-form-fields__h2') }
    get emailInput() { return $('#email') }
    get passwordInput() { return $('#password') }
    get usernameInput() { return $('#login') }
    get countySelectorButton() { return $('.country-select-button') }
    get countrySearchInput() { return $('.FormControl-input') }
    get signupCheckbox() { return $('.FormControl-checkbox') }
    get countinueButton() { return $('//*[contains(text(), "Continue")]') }



    async setEmail(email) {
        await this.emailInput.setValue(email);
    }

    async setPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async setUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async selectCountry(country) {
        await this.countySelectorButton.click();
        await this.countrySearchInput.setValue(country);
        await browser.keys(['Enter']);
        // await this.countrySearchInput.addValue('\n'); //Simulate pressing Enter
    }

    async clickCheckbox() {
        await this.signupCheckbox.click();
    }

    async clickContinueButton() {
        await this.countinueButton.click();
    }

}

export default new signupPage();