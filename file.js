const fs = require("fs");
// reading files
// fs.readFile("./docs/sampletext.txt", (err, data) => {
//   err ? console.log(err) : "";
//   console.log(data.toString());
// });
//writing files
// fs.writeFile("./docs/sampletext.txt", "hello world", () => {
//   console.log("file written");
// });

// fs.writeFile("./docs/sampletextasd.txt", "hello ", () => {
//   console.log("file written");
// });
//directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     err ? console.log(err) : "";
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     err ? console.log(err) : "";
//     console.log("folder Deleted");
//   });
// }
//deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    err ? console.log(err) : "";
    console.log("file deleted");
  });
} else {
  fs.writeFile("./docs/deleteme.txt", "de", () => {
    console.log("file written");
  });
}
console.log("last line");
