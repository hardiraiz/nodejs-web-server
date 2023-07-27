const fs = require('fs');
const path = require('path')

// mengambil lokasi directory untuk pemanggilan file
const result = path.resolve(__dirname, 'notes.txt');

const data = fs.readFileSync(result, 'UTF-8');
console.log(data);