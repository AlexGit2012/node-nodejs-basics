import { Worker } from 'worker_threads';
import os from 'os';

export const performCalculations = async () => {
    let promises = [];
    for (let i=0; i<os.cpus().length; i++) {
        promises.push(new Promise((resolve, reject)=>{
            const worker = new Worker('./worker.js', {
                workerData: 10 + i
            })
            worker.on('message', msg => resolve({status: 'resolved', data: msg}));
            worker.on('error', err => resolve({status: 'error', data: null}));
        }))
    }

    const result = await Promise.all(promises).then(data => {
        console.log(data)
        return data;
    });
    return result;
};

performCalculations();