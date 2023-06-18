import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');

    if (fs.existsSync(path.join(subPath, 'fresh.txt'))) throw new Error('FS operation failed');
    else {
        fs.writeFile(path.join(subPath, 'fresh.txt'), "I am fresh and young", (err)=>{
            if (err) {
                throw new Error('FS operation failed');
            }
        })
    }
};

create();
