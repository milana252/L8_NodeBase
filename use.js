const path = require('path');
const { fetchData } = require('./modules/fetchData');
const { sortStringsIgnoreSpaces } = require('./modules/sortStrings');
const fsModule = require('./modules/fileSystem');

async function run() {
  const res = await fetchData('https://jsonplaceholder.typicode.com/users');
  if (res.error) return console.error('Fetch error:', res.error);

  const users = res.data;
  const names = users.map(u => u.name);
  const emails = users.map(u => u.email);
  const sortedNames = sortStringsIgnoreSpaces(names);

  const usersDir = path.join(process.cwd(), 'users');
  await fsModule.createDir(usersDir);
  await fsModule.writeFile(path.join(usersDir, 'names.txt'), sortedNames.join('\n'));
  await fsModule.writeFile(path.join(usersDir, 'emails.txt'), emails