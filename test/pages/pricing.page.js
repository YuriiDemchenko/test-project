class pricingPage {

    get pricingHeader() { return $("//h1[@class='h2-mktg']") }
    get compareFeaturesLink() { return $("//a[@href='#compare-features']") }
    get compareFeaturesTitle() { return $(".h1") }

    async compareFeaturesLinkScroll() {
        await this.compareFeaturesLink.scrollIntoView();
    }


}

export default new pricingPage();