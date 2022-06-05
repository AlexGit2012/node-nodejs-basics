export const parseEnv = () => {
    let pattern = new RegExp('RSS_');
    let parsedEnvKeys = Object.keys(process.env).filter(key => pattern.test(key));
    let parsedString = parsedEnvKeys.map(key => `${key}=${process.env[key]}`).join(" ")
    console.log(parsedString)
    return parsedString;
};

parseEnv();
