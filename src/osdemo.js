import os from 'os';

// Get the system's architecture
console.log('Architecture:', os.arch());

// Get the platform
console.log('Platform:', os.platform());

// Get the operating system type
console.log('OS Type:', os.type());


// Get total system memory in GB
console.log('Total Memory:', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');

// Get free system memory in GB
console.log('Free Memory:', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');


const cpus = os.cpus();
console.log('CPU Info:', cpus);

// Get the number of CPU cores
console.log('Number of CPU Cores:', cpus.length);

const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);


// Get system uptime in hours
console.log('System Uptime:', (os.uptime() / 3600).toFixed(2), 'hours');

// Get the home directory of the current user
console.log('Home Directory:', os.homedir());

// Get the path of the temporary directory
console.log('Temporary Directory:', os.tmpdir());   