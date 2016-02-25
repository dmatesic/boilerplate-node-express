import { start } from './server.js';
import { argv } from 'yargs';

start({
  host: argv.host,
  port: argv.port,
});
