import {Transform} from 'stream';

export const transform = async () => {

    const reverseString = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join('').trim()  + '\n')
        }
    })

    process.stdin.pipe(reverseString).pipe(process.stdout);
};

transform();
