let spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let tt = 100;
for (let i of spin) {
  setTimeout(() => process.stdout.write(i), tt);
  tt += 200;
}