import cheerio from 'cheerio';
import Crawler from 'crawler';
import { Image } from '../entities/Image';
import { VendorType } from '../configs';
import { Vendor } from '../entities/Vendor';
import { handleCrawlerError } from '../helpers/handleCrawlerError';

export default new Crawler({
  maxConnections: 10,
  async callback(err, { body, options }, done) {
    if (err) {
      handleCrawlerError(err, options);
    }

    const $ = cheerio.load(body);
    const ids = $('img')
      .toArray()
      .map(n => n.attribs.srcset)
      .filter(url => /photo\-/.test(url))
      .map(url => {
        const result = url.match(/photo\-(\d+\-[\d\w]{12})/);

        return result ? result[1] : '';
      })
      .filter(id => Boolean(id));

    for (let id of ids) {
      const image = (await Image.findOne({ vid: id })) || new Image();

      if (!image.vid) {
        image.vid = id;
        image.vendor = await Vendor.findOne({ name: VendorType.UNSPLASH });
        await Image.save(image);
      }
    }
    done();
  },
});
