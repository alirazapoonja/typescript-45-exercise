
console.log("Equality test with strings:", "Apple" === "Apple");

console.log("inequality test with strings:", ("Apple" as string) != "orange");

console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

console.log("Eqality test with numbers: ", 26 === 26);

console.log("inEqality test with numbers: ", (26 as number) != 35);

console.log("Greater than test: ", 10 > 5);

console.log("Less than test: ", 5 < 10);

console.log("Greater than equal to test: ", 10 >= 10);

console.log("And operator test: ", 5 === 5 && 10 > 5);

console.log("Or operator test: ", 5 === 5 || 10 > 5);

console.log("Or operator test: ", 5 === 5 || false);

const fruits : string [] = ['Nashpati', 'Banana', 'Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));

console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));












