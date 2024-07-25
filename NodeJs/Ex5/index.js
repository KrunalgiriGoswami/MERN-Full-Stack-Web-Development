// File System - Callback API

import { error } from "console";
import * as fs from "fs";

// creating Directory
 fs.mkdir("D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\demo", (error) => {
   if (error) throw error;
   console.log("Directory Created...");
 });


 fs.mkdir(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\test",
   { recursive: true },
   (error) => {
     if (error) throw error;
     console.log("Directory Created...");
   }
 );

// Read directory
 fs.readdir(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new",
   (error, files) => {
     if (error) throw error;
     for (const file of files) console.log(file);
   }
 );

// Remove Directory
 fs.rmdir(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\test",
   (error) => {
     if (error) throw error;
     console.log("Directory removed...");
   }
 );

// Create and Write file
 fs.writeFile(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\readme.txt",
   "Hello , welcome to node js ...",
   (error) => {
     if (error) throw error;
     console.log("File Created...");
   }
 );

// Read file
 fs.readFile(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\readme.txt",
   (error, data) => {
     if (error) throw error;
     console.log(data);
   }
 );

 fs.readFile(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\readme.txt",
   "utf-8",
   (error, data) => {
     if (error) throw error;
     console.log(data);
   }
 );

// Append file
 fs.appendFile(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\readme.txt",
   " Node js Is best choice for backend",
   (error) => {
     if (error) throw error;
     console.log("File Appended...");
   }
 );

// copy file
 fs.copyFile(
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\readme.txt",
   "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\demo\\info.txt",
   (error) => {
     if (error) throw error;
     console.log("File Copied...");
   }
 );

// get information
fs.stat(
  "D:\\MERN-Full-Stack-Web-Development\\NodeJs\\Ex5\\new\\readme.txt",
  (error, stats) => {
    if (error) throw error;
    console.log(stats);
    console.log(stats.isDirectory());
    console.log(stats.isFil));
  }
);
