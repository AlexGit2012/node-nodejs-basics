import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');

    fs.unlink(path.join(subPath, 'fileToRemove.txt'), (err)=>{
        if (err) {
            throw new Error('FS operation failed')
        }
    })
};

remove();