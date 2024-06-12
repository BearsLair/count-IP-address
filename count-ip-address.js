function ipsBetween(start, end) {
  const startAddress = start.split(".");
  const endAddress = end.split(".");
  let diffArray = [];

  console.log(startAddress + " / " + endAddress);

  // Iterates through both arrays simultaneously, subtracting the difference to push
  // to diffArray.
  for (let i = 0; i < 4; i++) {
    diffArray.push(endAddress[i] - startAddress[i]);
  }

  console.log("before...", diffArray);
  // Adds negative numbers to 256, replacing the negative integer with positive sum.
  // Then subtracts 1 from previous iteration in Array to adjust for this addition.
  for (let i = 0; i < 4; i++) {
    if (diffArray[i] < 0) {
      diffArray[i - 1]--;
      diffArray[i] += 256;
    }
  }

  console.log("after...", diffArray);
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1")); // 1
console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // 246
console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
console.log(ipsBetween("160.0.0.0", "160.0.1.0")); // 256
console.log(ipsBetween("170.0.0.0", "170.1.0.0")); // 65536
console.log(ipsBetween("50.0.0.0", "50.1.1.1")); // 65793
console.log(ipsBetween("180.0.0.0", "181.0.0.0")); // 16777216
console.log(ipsBetween("1.2.3.4", "5.6.7.8")); // 67372036
console.log(ipsBetween("0.0.0.0", "255.255.255.255")); // 2 ** 32 - 1
