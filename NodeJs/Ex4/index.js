import { log } from "console";
import { mkdir } from "fs";

// File System - Promise API
import * as fs from "fs/promises";

// Run one by one

// Make directory
try {
  await fs.mkdir(
    "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex4\\demo\\test",
    { recursive: true }
  );
  console.log("Directory created...");
} catch (error) {
  console.log(error);
}

// Remove Directory
try {
  await fs.rmdir("D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex4\\demo");
  console.log("Directory removed...");
} catch (error) {
  console.log(error);
}

//Read Directory
try {
  const files = await fs.readdir(
    "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex4\\demo\\test"
  );

  for (const file in files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}

try {
  await fs.rmdir(
    "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex4\\demo\\test"
  );
  console.log("Remove Directory");
} catch (error) {
  console.log(error);
}

// Create and write file
try {
  await fs.writeFile("readme.txt", "Hello , Welcome to Node Js");
} catch (error) {
  console.log(error);
}

// Read File
try {
  const data = await fs.readFile("readme.txt");
  console.log(data);
} catch (error) {
  console.log(error);
}

// read in readable form
try {
  const data = await fs.readFile("readme.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}

// append in file
try {
  await fs.appendFile("readme.txt", "Welcome to learning Node js...");
} catch (error) {
  console.log(error);
}

// copy file
try {
  await fs.copyFile(
    "readme.txt",
    "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex4\\demo\\info.txt"
  );
  console.log("File copied...");
} catch (error) {
  console.log(error);
}

//Get file information
try {
  const stats = await fs.stat(
    "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex4\\demo\\info.txt"
  );
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory());
} catch (error) {
  console.log(error);
}
