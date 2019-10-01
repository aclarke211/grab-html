const axios = require('axios');

// eslint-disable-next-line
export function scrapeSite(url) {
  axios(url)
    .then((response) => {
      const html = response.data;
      // eslint-disable-next-line
      console.log(html);
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
    });
}
