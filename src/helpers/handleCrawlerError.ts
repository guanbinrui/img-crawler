export function handleCrawlerError(err: Error, options: any): never {
  if (err && options.uri) {
    console.log(`Network error when request: ${options.uri}`);
    console.log(err);
  }
  return process.exit(1);
}
