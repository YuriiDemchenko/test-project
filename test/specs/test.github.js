import mainPage from "../pages/main.page";
import signupPage from "../pages/signup.page";
import copilotPage from "../pages/copilot.page";
import newsletterPage from "../pages/newsletter.page";
import searchResultPage from "../pages/searchResult.page";
import pricingPage from "../pages/pricing.page";


describe("gitHub page test", () => {
    it("Fill the signup form", async () => {
        await browser.url('https://github.com');
        await mainPage.clickSignupButton();
        await expect(signupPage.signupTitle).toHaveText('Sign up to GitHub');
        await signupPage.setEmail('test12334@example.com');
        await signupPage.setPassword('very_strong_password1234')
        await signupPage.setUsername('UniqueUsername-test');
        await signupPage.selectCountry('Botswana');
        await signupPage.clickCheckbox();
        await signupPage.clickContinueButton();
    });

    it("Header and copilot button test", async () => {
        await browser.url('https://github.com');
        await mainPage.h2TitleScroll();
        await expect(mainPage.h2Title).toHaveText('Millions of developers and businesses call GitHub home');
        await expect(mainPage.copilotButton).toHaveText('Try GitHub Copilot');
        await mainPage.clickCopilotButton();
        await expect(copilotPage.copilotForfreeHeader).toHaveText('Try Copilot Pro for 30 days free');
        await copilotPage.clickCopilotForfreeButton();
    });

    it("Subscribe button and page test", async () => {
        await browser.url('https://github.com');
        await mainPage.subscribeButtonScroll();
        await expect(mainPage.subscribeButton).toHaveText('Subscribe');
        await mainPage.clickSubscribeButton();
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/');
        await expect(newsletterPage.newsLetterPageHeader).toHaveText('Subscribe to our developer newsletter');
        await newsletterPage.setEmail('test12334@example.com');
        await newsletterPage.selectCountry();
        await newsletterPage.clickCheckbox();
        await newsletterPage.clickSubmitButton();
        await expect(newsletterPage.newsLetterPageHeader).toHaveText('Thanks for subscribing!');
    });

    it("Search result test", async () => {
        let searchValue = 'arc';
        await browser.url('https://github.com');
        await mainPage.searchInputClick();
        await mainPage.searchInputSetValue(searchValue);
        const hrefs = await searchResultPage.getSearchResultLinks();
        const hasMatch = hrefs.some(href => href.includes(searchValue));
        await expect(hasMatch).toBe(true);
    });

    it("Pricing page test", async () => {
        await browser.url('https://github.com');
        await mainPage.clickPricingButton();
        await expect(pricingPage.pricingHeader).toHaveText('Try the Copilot-powered platform');
        await pricingPage.compareFeaturesLinkScroll();
        await expect(pricingPage.compareFeaturesTitle).toHaveText('Compare features');
    });

});
