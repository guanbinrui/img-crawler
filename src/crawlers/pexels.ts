import cheerio from 'cheerio';
import Crawler from 'crawler';
import { Image } from '../entities/Image';
import { VendorType } from '../configs';
import { Vendor } from '../entities/Vendor';
import { handleCrawlerError } from '../helpers/handleCrawlerError';

export default new Crawler({
  maxConnections: 10,
  callback(err, { body, options }, done) {
    if (err) {
      handleCrawlerError(err, options);
    }

    const $ = cheerio.load(body);
    const ids = $('img')
      .toArray()
      .map(n => n.attribs.src)
      .filter(url => /photos\//.test(url))
      .map(url => {
        const result = url.match(/photos\/(\d+)\//);

        if (!result || result.length === 1) {
          return 0;
        }
        return parseInt(result[1], 10);
      })
      .filter(id => Boolean(id));

    if (ids.length) {
      ids.forEach(async id => {
        const image = (await Image.findOne({ vid: id })) || new Image();

        image.vid = id;
        image.vendor = await Vendor.findOne({ name: VendorType.PEXELS });
        await Image.save(image);
      });
    }
    done();
  },
});
