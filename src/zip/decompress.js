import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import zlib from'zlib';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');
    const gunzip = zlib.createGunzip();

    const readableStream = fs.createReadStream(path.join(subPath, 'archive.gz'));
    const writableStream = fs.createWriteStream(path.join(subPath, 'fileToCompress.txt'));

    readableStream.pipe(gunzip).pipe(writableStream);
};

decompress();
