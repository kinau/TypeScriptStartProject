var rect = { x: 0, y: 10, width: 15, height: 20 };
var {x, y, width, height} = rect;

var p = 1, q = 2;
[p, q] = [q, p];

// Array destructuring with ... remaining
var [x, y, ...remaining] = [1, 2, 3, 4];

// Array destructuring with ... ignores
var [x, , ...remaining] = [1, 2, 3, 4];

// Create array from an array
var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1,2,3,4]