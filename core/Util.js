import SiteFactory from "./sites/Factory.js";

export default {
    getSite: (url) => {
        return SiteFactory.fromUrl(url);
    },
    
    /**
     * @returns {void}
     */
    createQuestion: (question) => {
        if (question) {
            chrome.tabs.create({
                active: true,
                url: `https://stackoverflow.com/questions/ask?title=${question}`
            });
        }
    }
};
