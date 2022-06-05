import {fileURLToPath} from 'url';
import path from 'path';
import module from 'module';
import { release, version } from 'os';
import {createServer as createServerHttp} from 'http';
import './files/c.js';

const require = module.createRequire(import.meta.url);
const aJSON = require('./files/a.json');
const bJSON = require('./files/b.json');
const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let unknownObject;

if (random > 0.5) {
    unknownObject = aJSON;
} else {
    unknownObject = bJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {unknownObject, createMyServer}

