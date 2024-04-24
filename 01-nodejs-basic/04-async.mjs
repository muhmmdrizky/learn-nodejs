// Async di module secara default udah asynchronous
function samplePromise() {
  return Promise.resolve("Hello world");
}

const hello = await samplePromise();
console.log(hello);
