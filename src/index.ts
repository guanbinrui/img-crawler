import pexelsCrawler from './crawlers/pexels';
import randomWords from 'random-words';

// pexels
const words = randomWords(10);
const urls = words.map(
  w => `https://www.pexels.com/search/${encodeURIComponent(w)}`
);

pexelsCrawler.queue(urls);
