import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import zlib from'zlib';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');
    const gzip = zlib.createGzip();

    const readableStream = fs.createReadStream(path.join(subPath, 'fileToCompress.txt'), {encoding: 'utf-8'});
    const writableStream = fs.createWriteStream(path.join(subPath, 'archive.gz'));

    readableStream.pipe(gzip).pipe(writableStream);
};

compress();
