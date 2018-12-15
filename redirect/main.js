const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url);

  res.writeHead(301, {
    Location: `https://www.tinyhiccups.com${url.path}`,
  });
  res.end();
};
