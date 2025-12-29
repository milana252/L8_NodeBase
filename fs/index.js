const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

function writeFileSync(filePath, content) { fs.writeFileSync(filePath, content, 'utf8'); }
function readFileSync(filePath) { return fs.readFileSync(filePath, 'utf8'); }
function updateFileSync(filePath, newContent) { fs.writeFileSync(filePath, newContent, 'utf8'); }
function clearFileSync(filePath) { fs.writeFileSync(filePath, '', 'utf8'); }
function cleanNoiseSync(filePath) {
  let data = fs.readFileSync(filePath, 'utf8');
  data = data.replace(/[0-9]/g, '').toLowerCase();
  fs.writeFileSync(filePath, data, 'utf8');
}
function copyFileSync(src, dest) { fs.copyFileSync(src, dest); }
function createDirSync(dirPath) { if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true }); }
function removeDirSync(dirPath) { if (fs.existsSync(dirPath)) fs.rmSync(dirPath, { recursive: true, force: true }); }

async function writeFile(filePath, content) { await fsp.writeFile(filePath, content, 'utf8'); }
async function readFile(filePath) { return fsp.readFile(filePath, 'utf8'); }
async function updateFile(filePath, newContent) { await fsp.writeFile(filePath, newContent, 'utf8'); }
async function clearFile(filePath) { await fsp.writeFile(filePath, '', 'utf8'); }
async function cleanNoise(filePath) {
  let data = await fsp.readFile(filePath, 'utf8');
  data = data.replace(/[0-9]/g, '').toLowerCase();
  await fsp.writeFile(filePath, data, 'utf8');
}
async function copyFile(src, dest) { await fsp.copyFile(src, dest); }
async function createDir(dirPath) { await fsp.mkdir(dirPath, { recursive: true }); }
async function removeDir(dirPath) { await fsp.rm(dirPath, { recursive: true, force: true }); }

function demo() {
  const tmp = path.join(process.cwd(), 'tmp_demo');
  createDirSync(tmp);
  writeFileSync(path.join(tmp, 'a.txt'), 'Hello 123 WORLD!');
  cleanNoiseSync(path.join(tmp, 'a.txt'));
  copyFileSync(path.join(tmp, 'a.txt'), path.join(tmp, 'b.txt'));
  console.log('FS demo done');
  removeDirSync(tmp);
}

if (require.main === module) demo();

module.exports = {
  writeFileSync, readFileSync, updateFileSync, clearFileSync, cleanNoiseSync,
  copyFileSync, createDirSync, removeDirSync,
  writeFile, readFile, updateFile, clearFile, cleanNoise,
  copyFile, createDir, removeDir, demo
};
