import AbstractSite from "./AbstractSite.js";

export default class Duckduckgo extends AbstractSite {
    
    /**
     * @param {string} url
     * @returns {bool}
     */
    isValidUrl(url = '') {
        return /(w{3}\.)?duckduckgo\./.test(url);
    }

    /**
     * @return {string} 
     */
    getDomQuerySelector() {
        return ['input[type="text"]', 'form input[type="text"]'];
    }
}
