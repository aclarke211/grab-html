const axios = require('axios');

// eslint-disable-next-line
export function scrapeSite(url) {
  return new Promise((resolve) => {
    axios(url)
      .then((response) => {
        const html = response.data;
        // eslint-disable-next-line
        // console.log(html);
        resolve(html);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error(err);
      });
  });
}
