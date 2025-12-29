require('dotenv').config();

function printEnvInfo() {
  const { NAME, SURNAME, GROUP, NUMBER, MODE, ACCESS_MODE } = process.env;
  console.log('=== ENV INFO ===');
  console.log(`Name: ${NAME}`);
  console.log(`Surname: ${SURNAME}`);
  console.log(`Group: ${GROUP}`);
  console.log(`Number: ${NUMBER}`);
  console.log(`Mode: ${MODE}`);
  console.log(`Access Mode: ${ACCESS_MODE}`);
  console.log('================');
}

printEnvInfo();
