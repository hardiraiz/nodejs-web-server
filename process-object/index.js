const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1
const yourName = process.argv[2]; // TODO 2
const environment = process.env.NODE_ENV // TODO 3

console.log(process.env);

for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed // TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// ketik di cmd bukan pwsh 'SET NODE_ENV=development && node ./process-object/index.js Hardi'
// di pwsh NODE_ENV not detected