import

(async () => {
  const stream = fs.createReadStream('bigfile.txt', { encoding: 'utf8' });

  for await (const chunk of stream) {
    console.log('Chunk length:', chunk.length);
  }

  console.log('Finished reading file');
})();

