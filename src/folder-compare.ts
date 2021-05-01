#!/usr/bin/env ts-node

import fs from "fs";
import { compare, compareSync, Options, Result } from "dir-compare";

console.log(__dirname);

const oldPath = `${__dirname}/${process.argv[2]}`;
const newPath = `${__dirname}/${process.argv[3]}`;

if (!fs.existsSync(oldPath))
  throw new Error(`Folder '${oldPath}' does not exist`);

if (!fs.existsSync(newPath))
  throw new Error(`Folder '${newPath}' does not exist`);

const options: Options = { compareSize: true };

const res: Result = compareSync(oldPath, newPath, options);

if (res.differences) {
  console.log(res);
  throw new Error("Folders differ");
} else {
  console.log("Folders are equal");
}
