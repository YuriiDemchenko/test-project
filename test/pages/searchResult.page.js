class searchResultPage {

    async getSearchResults() {
        return browser.waitUntil(async () => {
            const searchResults = await $$("//div[contains(@class, 'search-title')]//a");
            return searchResults.length > 0 ? searchResults : [];
        }, { timeout: 5000, timeoutMsg: "Search results not found within 5 seconds" });
    }
}
export default new searchResultPage();