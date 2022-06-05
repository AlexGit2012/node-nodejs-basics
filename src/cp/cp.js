import cp from 'child_process';

export const spawnChildProcess = async (args) => {
    const childProcess = cp.spawn('node', ['files/script.js', ...args]);

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.setEncoding('utf8');

    childProcess.stdout.on('data', (data)=>{
        process.stdout.write(data);
    })
};

spawnChildProcess(['Hello', 'world']);
