import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const subPath = path.join(__dirname, 'files');
    const destinationPath = path.join(__dirname, 'files_copy')

    if (!fs.existsSync(subPath) || fs.existsSync(destinationPath)) throw new Error('FS operation failed');
    else {
        fs.mkdir(destinationPath ,(err)=>{
            if (err) {
                throw new Error('FS operation failed');
            }

            fs.readdir(subPath, (err, files)=>{
                if (err) {
                    throw new Error('FS operation failed');
                }

                files.forEach(file => fs.copyFile(path.join(subPath, file), path.join(destinationPath, file), (err)=>{
                    if (err) {
                        throw new Error('FS operation failed');
                    }
                }))
            })
        })
    }
};

copy();
