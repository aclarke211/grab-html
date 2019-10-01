const axios = require('axios');
const cheerio = require('cheerio');

/**
 *
 * Used to grab the HTML of an external website.
 *
 * @param {String} url = The URL of a website we wish to get the HTML from.
 */
export function scrapeSite(url) {
  return new Promise((resolve) => {
    axios(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error(err);
      });
  });
}

/**
 *
 * Used to filter elements from the scraped HTML pages
 *
 * @param {String} html = A HTML string such as the one returned from scrapeSite().
 * @param {String} selector = Used to select elements within the HTML string.
 */
export function filterHTML(html, selector) {
  const $ = cheerio.load(html);
  return $(selector);
}
