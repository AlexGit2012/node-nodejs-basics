import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');
    fs.readdir(subPath, (err, files)=>{
        if (err) {
            throw new Error('FS operation failed');
        }

        files.forEach(file => console.log(file))
    })
};

list();
