import { fruitList } from "./fruits.js";
// const Fruits = require("./fruits");

const myRecursion = num => {
	if (num === 1) {
		// exit case
		return num;
	}
	return num * myRecursion(num - 1); // where the magic happens
};

console.log(fruitList);
console.log(myRecursion(5)); // myRecursion(5) -> 120

// this will be a pr
