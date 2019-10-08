import pexelsCrawler from './crawlers/pexels';
import unsplashCrawler from './crawlers/unsplash';
import randomWords from 'random-words';
import { createTypeormConn } from './helpers/createTypeormConn';
import { VendorType } from './configs';
import { Vendor } from './entities/Vendor';

async function start() {
  await createTypeormConn();

  // vendors
  for (let vendorName of Object.keys(VendorType)) {
    const vendor =
      (await Vendor.findOne({ name: vendorName as VendorType })) ||
      new Vendor();

    vendor.name = VendorType[vendorName as keyof typeof VendorType];
    await Vendor.save(vendor);
  }

  // crawle
  const words = randomWords(200);

  words.forEach(word => {
    const searchWord = encodeURI(word);

    pexelsCrawler.queue(`https://www.pexels.com/search/${searchWord}`);
    unsplashCrawler.queue(`https://unsplash.com/s/photos/${searchWord}`);
  });
}

start();
