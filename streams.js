const fs = require("fs");

const readStream = fs.createReadStream("./docs/sampletext.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("--new chunks---");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
