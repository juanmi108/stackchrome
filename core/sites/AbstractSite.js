export default class AbstractSite {
    
    /**
     * Used to determine the page type eg. google, bing
     * @param {string} url
     * @returns {bool} 
     */
    isValidUrl(url = '') {
        throw 'not yet implemented!';
    }

    /**
     * Should point to single dom-element of type input
     * e.g `input.search-field`
     * 
     * @returns {string|Array<string>} 
     */
    getDomQuerySelector() {
        throw 'not yet implemented';
    }
};
