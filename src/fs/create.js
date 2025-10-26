import * as fs from "fs";

const create = async () => {
  fs.writeFile(
    "./src/fs/files/fresh.txt",
    "I am fresh and young",
    { flag: "wx" },
    (err) => {
      if (err?.code === "EEXIST") {
        throw new Error("FS operation failed");
      } else console.log("The file has been written successfully.");
    }
  );
};

await create();
