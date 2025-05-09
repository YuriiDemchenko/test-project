class SearchResultPage {

    async getSearchResultLinks() {
        // Waits until at least one search result link appears on the page
        await browser.waitUntil(async () => {
            const links = await $$("//div[contains(@class, 'search-title')]//a");
            return links.length > 0; // Ensures we have results before proceeding
        }, { timeout: 5000, timeoutMsg: "No links found within the specified time" });

        // Fetches all <a> elements inside divs with class 'search-title'
        const links = await $$("//div[contains(@class, 'search-title')]//a");

        // Extracts href attributes from the collected elements
        const hrefs = [];
        for (const link of links) {
            const href = await link.getAttribute('href'); // Retrieves the href value
            hrefs.push(href); // Stores it in the array
        }

        return hrefs; // Returns all hrefs found
    }
}

export default new SearchResultPage();