class mainPage {

    get signupButton() { return $("//a[contains(text(), 'Sign up')]") }
    get h2Title() { return $('//h2[contains(text(), "Millions of developers and businesses call GitHub home")]') }
    get copilotButton() { return $('//*[contains(text(), "Millions of developers and businesses call GitHub home")]/following::a[1]') }
    get subscribeButton() { return $('.btn-mktg') }
    get searchBox() { return $('.search-input') }
    get searchBoxInput() { return $('#query-builder-test') }

    async clickSignupButton() {
        await this.signupButton.click();
    }

    async h2TitleScroll() {
        await this.h2Title.scrollIntoView();
    }

    async clickCopilotButton() {
        await this.copilotButton.click();
    }

    async subscribeButtonScroll() {
        await this.subscribeButton.scrollIntoView();
    }

    async clickSubscribeButton() {
        await this.subscribeButton.click();
    }

    async searchInputClick() {
        await this.searchBox.click()

    }

    async searchInputSetValue(searchValue) {
        await this.searchBoxInput.setValue(searchValue);
        await browser.keys(['Enter']);
    }

}

export default new mainPage();