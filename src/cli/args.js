export const parseArgs = () => {
    let parsedArgv = process.argv.slice(2);
    let parsedString = '';
    while (parsedArgv.length) {
        parsedString+=`${parsedArgv.shift().slice(2)} is ${parsedArgv.shift()}, `
    }
    if (parsedString) {
        parsedString = parsedString.slice(0, parsedString.length - 2);
    }
    console.log(parsedString);
    return parsedString;
};

parseArgs();
