import pexelsCrawler from './crawlers/pexels';
import unsplashCrawler from './crawlers/unsplash';
import randomWords from 'random-words';
import { createTypeormConn } from './helpers/createTypeormConn';
import { VendorType } from './configs';
import { Vendor } from './entities/Vendor';

async function start() {
  await createTypeormConn();

  // vendors
  for await (let vendorName of Object.keys(VendorType)) {
    const vendor = (await Vendor.findOne({ name: vendorName })) || new Vendor();

    vendor.name = VendorType[vendorName as keyof typeof VendorType];
    await Vendor.save(vendor);
  }

  // crawle
  const words = randomWords(100);

  words.forEach(word => {
    const searchWork = encodeURI(word);

    pexelsCrawler.queue(`https://www.pexels.com/search/${searchWork}`);
    unsplashCrawler.queue(`https://unsplash.com/s/photos/${searchWork}`);
  });
}

start();
