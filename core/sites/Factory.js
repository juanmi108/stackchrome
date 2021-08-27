import AbstractSite from "./AbstractSite.js";
import Google       from "./Google.js";
import Bing         from "./Bing.js";
import Duckduckgo   from "./Duckduckgo.js";
import Ecosia       from "./Ecosia.js";

/**
 * @type {Array<AbstractSite>}
 */
const sites = [Google, Bing, Duckduckgo, Ecosia];

export default {
    
    /**
     * @param {string} url 
     * @param {*} options 
     * @returns {AbstractSite}
     */
    fromUrl: (url, options = {}) => {
        var site;
        sites.some((candidate) => {
            const instance = new candidate(options);
            if (instance.isValidUrl(url)) {
                site = instance;
                return true;
            }
        });
        return site;
    }
};
