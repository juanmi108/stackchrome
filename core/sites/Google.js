import AbstractSite from "./AbstractSite.js";

export default class Google extends AbstractSite {
    
    /**
     * @param {string} url
     * @returns {bool}
     */
    isValidUrl(url = '') {
        return /(w{3}\.)?google\./.test(url);
    }

    /**
     * @return {string} 
     */
    getDomQuerySelector() {
        return 'input[type="text"]';
    }
}
