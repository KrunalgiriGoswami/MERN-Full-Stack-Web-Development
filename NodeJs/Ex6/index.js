// File System - Synchronous API
import * as fs from "fs";

// creatig directory -path should be there
fs.mkdirSync("D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\demo");

//creatig directory -path is not require to be there
fs.mkdirSync("D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\new\\test", {
  recursive: true,
});

// read content od directory
const files = fs.readdirSync(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6"
);
for (const file of files) console.log(file);

// Remove directory
fs.rmdirSync("D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\new\\test");

// write file
fs.writeFileSync(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\demo\\readme.txt",
  "Hello, Node js ..."
);

// // read file
const data = fs.readFileSync(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\demo\\readme.txt"
);
console.log(data);

const data1 = fs.readFileSync(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\demo\\readme.txt",
  "utf-8"
);
console.log(data1);

// Append data
fs.appendFileSync(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\demo\\readme.txt",
  " Welcome to Node Js"
);

// copy file
fs.copyFileSync(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\demo\\readme.txt",
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\new\\info.txt"
);

// get information of directori
const stats = fs.statSync(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex6\\demo\\readme.txt"
);
console.log(stats);
console.log(stats.isDirectory());
console.log(stats.isFile());
