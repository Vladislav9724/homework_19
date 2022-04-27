
let weight = +prompt("Вага тіла (кг)");

console.log(`Вага: ${weight} кг.`);

let height = +prompt("Зріст (м)");

console.log(`Зріст: ${height} м.`);

let index = weight / height **2;

console.log(`Індекс: ${index}`);

if(index <= 16){
    console.log(`${index} - виражений дефіцит маси тіла. Норма (16 та менше)`);
}else if(index >= 16 && index <= 18.5){
    console.log(`${index} - недостотня маси тіла. Норма (16 - 18.5)`);
}else if(index >= 18.5 && index <= 25){
    console.log(`${index} - норма. Норма (18.5 - 25)`);
}else if(index >= 25 && index <= 30){
    console.log(`${index} - надлишккава маса тіла. Норма (25 - 30)`);
}else if(index >= 30 && index <= 35){
    console.log(`${index} - ожиріння 1 категорії. Норма (30 - 35)`);
}else if(index >= 35 && index <= 40){
    console.log(`${index} - ожиріння 2 категорії. Норма (35 - 40)`);
}else if(index >= 40){
    console.log(`${index} - ожиріння 3 категорії. Норма (40 та більше)`);
}