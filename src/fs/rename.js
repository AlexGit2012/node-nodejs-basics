import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');

    if (fs.existsSync(path.join(subPath, 'properFilename.md')) ||
        !fs.existsSync(path.join(subPath, 'wrongFilename.txt'))) throw new Error('FS operation failed')
    else {
        fs.rename(path.join(subPath, 'wrongFilename.txt'), path.join(subPath, 'properFilename.md'), (err)=>{
            if (err) throw new Error('FS operation failed');
        })
    }
};

rename();
