import Crawler from 'crawler';

export default new Crawler({
  maxConnections: 10,
  callback(e, res, done) {
    console.log(res.body);
    done();
  },
});
