const crypto = require('crypto');

const password = 'admin123';
const salt = crypto.randomBytes(16).toString('hex');
const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

console.log(`SALT=${salt}`);
console.log(`HASH=${hash}`);
