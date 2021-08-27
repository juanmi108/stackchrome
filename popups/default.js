import Util from "../core/Util.js";

/**
 * Shows a message inside the extension pop-up
 *
 * @param {string} [msgKey='']
 */
const setMsg = (msgKey = '') => {
    const elMsgSpan       = document.querySelector('span.msg');
    elMsgSpan.textContent = chrome.i18n.getMessage(msgKey);
};

/**
 * Start point
 * 
 * Loads a Site-Object from the current-tab url.
 * If the site is supported opens new tab to "Ask a public question" in stackoverflow
 */ 
async function init() {
    let [tab]  = await chrome.tabs.query({active: true, currentWindow: true});
    const site = Util.getSite(tab.url);
    if (!site) {
        setMsg('error_bad_location');
        return;
    }
    const querySelector = site.getDomQuerySelector();
    const results       = await chrome.scripting.executeScript({
        target: { tabId: tab.id},
        args: [querySelector],
        func: (querySelector) => {
            if (typeof querySelector === 'string') {
                querySelector = [querySelector];
            }
            let searchText = '';
            querySelector.some(selector => {
                const element = document.querySelector(selector);
                if (element) {
                    /** is <input> */
                    if (element instanceof HTMLInputElement) {
                        if (element.value) {
                            searchText = element.value;
                            return true;
                        }
                    }
                    if (element.innerText) {
                        searchText = element.innerText;
                        return true;
                    }
                }
            });
            return searchText;
        }
    });

    Util.createQuestion(results[0].result);
}

init();
