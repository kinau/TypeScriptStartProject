var someArray = [9, 2, 5];
for (let item in someArray) {
    console.log(item); // 0,1,2
}
for (let item of someArray) {
    console.log(item); // 9,2,5
}