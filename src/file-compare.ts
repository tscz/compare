#!/usr/bin/env ts-node

import * as Diff from "diff";
import fs from "fs";

console.log(__dirname);

const oldFile = `${__dirname}/${process.argv[2]}`;
const newFile = `${__dirname}/${process.argv[3]}`;

if (!fs.existsSync(oldFile))
  throw new Error(`File '${oldFile}' does not exist`);

if (!fs.existsSync(oldFile))
  throw new Error(`File '${oldFile}' does not exist`);

var oldContent = fs.readFileSync(oldFile, "utf-8");
var newContent = fs.readFileSync(newFile, "utf-8");

const differences = Diff.diffLines(oldContent, newContent);

if (differences.length > 1) {
  console.log(
    Diff.createTwoFilesPatch("file1", "file2", oldContent, newContent)
  );
  throw new Error("Files are different");
} else {
  console.log("Files are equal");
}
