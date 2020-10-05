const { pipeline, Transform } = require('stream');
const { program } = require('commander');
const help = require('./src/help');

const { encode, decode } = require('./src/cipher');
const { validateShift, validateAction } = require('./src/validators');

program
  .storeOptionsAsProperties(false)
  .version('0.0.1')
  .description('Caesar Cipher CLI App')
  .requiredOption('-s, --shift <number/integer>', 'a shift of Caesar Cipher Algo', validateShift)
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .requiredOption('-a, --action <encode/decode>', 'an action encode/decode', validateAction)
  .parse(process.argv)

const shift = program.opts().shift;
const action = program.opts().action;

const transformStream = new Transform({
  transform(chunk, _, done) {
    let data = chunk.toString();
    let result = '';

    if (action === 'encode') {
      result = encode(data, shift);
    }

    if (action === 'decode') {
      result = decode(data, shift);
    }

    this.push(result);
    done();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
