
let year = +prompt("Введіть рік!");

if ( (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ) {
        console.log(`${year} - високосний рік.`);
} else {
        console.log(`${year} - не високосний рік.`);
}