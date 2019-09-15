import cheerio from 'cheerio';
import Crawler from 'crawler';

export default new Crawler({
  maxConnections: 10,
  callback(e, { body }, done) {
    const $ = cheerio.load(body);
    const ids = $('img')
      .toArray()
      .map(n => n.attribs.src)
      .filter(url => /photos\//.test(url))
      .map(url => {
        const result = url.match(/photos\/(\d+)\//);

        if (!result || result.length === 1) {
          return '';
        }
        return parseInt(result[1], 10);
      })
      .filter(id => Boolean(id));

    done();
  },
});
