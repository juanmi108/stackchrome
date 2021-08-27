import AbstractSite from "./AbstractSite.js";

export default class Bing extends AbstractSite {
    
    /**
     * @param {string} url
     * @returns {bool}
     */
    isValidUrl(url = '') {
        return /(w{3}\.)?bing\./.test(url);
    }

    /**
     * @return {string} 
     */
    getDomQuerySelector() {
        return 'input[type="search"]';
    }
}
