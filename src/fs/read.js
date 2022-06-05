import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');
    fs.readFile(path.join(subPath, 'fileToRead.txt'), {encoding: 'utf-8'}, (err, data)=>{
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(data);
    })
};

read();
