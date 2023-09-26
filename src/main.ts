let numbers: number[] = [0, 9, 2, 4, 7, 13, 25];
let doppleNumbers: number[] = numbers.map((element) => element *2);
console.log(numbers);
console.log(doppleNumbers);
console.log("--------------------------------");

let words: string[] = ["Moin", "Hello", "Sun", "Beach-party", "chocolate"];
console.log(words);
let filterWords: string[] = words.filter((element) => element.length > 5);
console.log(filterWords);
console.log("--------------------------------");

let sumOfNumbers: number = numbers.reduce((a: number, b: number) => a + b);
console.log(sumOfNumbers);
console.log("--------------------------------");

let biggerThenTen: boolean = numbers.some((element) => element > 10);
console.log(biggerThenTen);
