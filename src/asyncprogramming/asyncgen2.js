//Async generator that simulates delayed values
async function* delayedNumbers() {
  yield await Promise.resolve(1);
  yield await new Promise(resolve => setTimeout(() => resolve(2), 1000));
  yield await new Promise(resolve => setTimeout(() => resolve(3), 1000));
}

// Consuming with for await...of
(async () => {
  for await (const num of delayedNumbers()) {
    console.log('Received:', num);
  }
})();
