const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(`I/O completed`);
    console.log(`------------------------------------`);

    setTimeout(() => console.log("Timer 2 finished"), 0);
    setImmediate(() => console.log("Immediate 2 finished"), 3000);

    process.nextTick(() => console.log("Proccess completed"));

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
        console.log(Date.now() - start, "Password encrypted")
    );
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
        console.log(Date.now() - start, "Password encrypted")
    );
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
        console.log(Date.now() - start, "Password encrypted")
    );
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
        console.log(Date.now() - start, "Password encrypted")
    );
});

console.log("Hello from the top-level code");
