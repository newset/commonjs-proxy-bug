const config = require('./rollup.config');
const rollup = require('rollup');

async function build(options: any): Promise<any> {
  const bundle = await rollup.rollup(options);
  await bundle.write(options.output);
}

build(config);
