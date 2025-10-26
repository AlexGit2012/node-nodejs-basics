import * as fs from "fs";

const rename = async () => {
  fs.access("./src/fs/files/wrongFilename.txt", (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.access("./src/fs/files/properFilename.md", (err) => {
        if (err?.code === "ENOENT") {
          fs.rename(
            "./src/fs/files/wrongFilename.txt",
            "./src/fs/files/properFilename.md",
            (err) => {
              if (err) {
                throw new Error(err);
              } else {
                console.log("The file has been renamed successfully.");
              }
            }
          );
        } else if (err) {
          throw new Error(err);
        } else throw new Error("FS operation failed");
      });
    }
  });
};

await rename();
