import AbstractSite from "./AbstractSite.js";

export default class Ecosia extends AbstractSite {
    
    /**
     * @param {string} url
     * @returns {bool}
     */
    isValidUrl(url = '') {
        return /(w{3}\.)?ecosia\./.test(url);
    }

    /**
     * @return {string} 
     */
    getDomQuerySelector() {
        return 'input[type="search"]';
    }
}
