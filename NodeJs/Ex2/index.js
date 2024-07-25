// path Module

const path = require("path");

console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.join("Course", "Mern-stack", "NodeJs", "Path-Module"));
console.log(path.join("Course", "Mern-stack", "NodeJs", "Path-Module", ".."));
console.log(
  path.join(__dirname, "Course", "Mern-stack", "NodeJs", "Path-Module", "..")
);
console.log(
  path.join("Course", "Mern-stack", "NodeJs", "Path-Module", "..", "..")
);

console.log(path.normalize("c:///new//folder////nodejs//file1///"));

console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).root);
console.log(path.parse(__filename).name);

console.log(path.isAbsolute("c:///new//folder/"));
console.log(path.isAbsolute("."));
