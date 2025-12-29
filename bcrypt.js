// bcrypt.js
const bcrypt = require('bcrypt');

// Функция: хеширование пароля с замером времени
async function hashPasswordWithTiming(password, rounds = 10) {
  const start = performance.now();
  const hash = await bcrypt.hash(password, rounds);
  const end = performance.now();
  const ms = +(end - start).toFixed(2);
  return { password, hash, ms };
}

async function main() {
  // 13 паролей для теста
  const passwords = Array.from({ length: 13 }, (_, i) => `password_${i + 1}_Milana_${Math.random().toString(36).slice(2)}`);
  const rounds = 10; // стандартная "стоимость" bcrypt

  console.log('Hashing started...');
  const results = await Promise.all(passwords.map(pw => hashPasswordWithTiming(pw, rounds)));

  // Вывод времени для каждого пароля
  results.forEach((r, idx) => {
    console.log(`#${idx + 1} time: ${r.ms} ms`);
  });

  // Анализ времени
  const avg = +(results.reduce((sum, r) => sum + r.ms, 0) / results.length).toFixed(2);
  const min = Math.min(...results.map(r => r.ms));
  const max = Math.max(...results.map(r => r.ms));

  console.log('--- Timing analysis ---');
  console.log(`Round cost: ${rounds}`);
  console.log(`Average: ${avg} ms, min: ${min} ms, max: ${max} ms`);
  console.log('Conclusion: bcrypt время варьируется из-за конкуренции задач, планировщика event loop и нагрузки CPU.');
}

main();
