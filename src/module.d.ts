// declarations for external modules
declare module 'crawler' {
  interface CrawlerOptions {
    maxConnections: number;
    callback: (e: Error, response: any, done: () => void) => void;
  }

  class Crawler {
    constructor(options: CrawlerOptions);

    public queue(url: string | string[]): void;
  }

  export default Crawler;
}

declare module 'random-words' {
  interface Options {
    min: number;
    max: number;
    exactly: number;
    join: string;
    wordsPerString: number;
    separator: string;
    formatter: (word: string) => string;
  }
  function randomWords(count: number): string[];
  function randomWords(options: Options): string[];
  function randomWords(payload: Options | number): string[];

  export = randomWords;
}
