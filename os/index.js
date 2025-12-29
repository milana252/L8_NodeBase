require('dotenv').config();
const os = require('os');

function getSystemInfo() {
  return {
    platform: os.platform(),
    freeMemGB: +(os.freemem() / (1024 ** 3)).toFixed(2),
    homeDir: os.homedir(),
    hostname: os.hostname(),
    networkInterfaces: os.networkInterfaces()
  };
}

function isMemoryGreaterThan4GB() {
  return os.freemem() / (1024 ** 3) > 4;
}

function secureGetSystemInfo() {
  if (process.env.ACCESS_MODE !== 'admin') {
    return 'Access denied: need admin rights';
  }
  return getSystemInfo();
}

function demo() {
  console.log('Memory > 4GB:', isMemoryGreaterThan4GB());
  console.log('Secure info:', secureGetSystemInfo());
}

if (require.main === module) demo();

module.exports = { getSystemInfo, isMemoryGreaterThan4GB, secureGetSystemInfo, demo };
