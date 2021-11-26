// let state = prompt("в какой стране вы проживаете?");
//
// if (state === "") {
//     alert('введите данные')
// } if (state === "Number") {
//         alert('название не может быть числом')
//     }
//
// let num1 = prompt('введите два числа');
// let num2 = prompt('введите второе число');
// if (num1%num2 != 0){
//     alert('вы ввели  не кратные числа');
// }else {
//     alert('вы ввели кратные числа')
// }
//
// let userNum = prompt('ведите число')
// if (userNum === '' || userNum === NaN){
//     alert('введите число')
// }if (userNum%2 != 0 ){
//     alert('вы ввели не четное число');
// }else {
//     alert('вы ввели четное число');
// }
// let quarter = prompt('введите число от 1 до 100');
// if (quarter === 'Number' && quarter != null && quarter >= 1 && quarter <= 100) {
//     if (quarter >= 1 && quarter <= 25) {
//         alert('первая четверть');
//     }
//     if (quarter >= 26 && quarter <= 50) {
//         alert('вторая четверть');
//     }
//     if (quarter >= 51 && quarter <= 75) {
//         alert('третья четверть');
//     }
//     if (quarter >= 76 && quarter <= 100) {
//         alert('четвертая четверть');
//     }
// }

// let calc1 = prompt('введите первое число');
// let calc2 = prompt('введите действие');
// let calc3 = prompt('введите второе число');
//
// if (calc2 == '*' || calc2 == '/' || calc2 == '-' || calc2 == '+' && calc1 === "Number" && calc3 === "Number" )
// if (calc2 == '*') {
//     let result = calc1 * calc3;
//     alert(result);
// }if (calc2 == '/') {
//     let result = calc1 / calc3;
//     if (calc3 == 0){
//         alert('делить на 0 нельзя');
//     }
//     alert(result);
// }if (calc2 == '-') {
//     let result = calc1 - calc3;
//     alert(result);
// }if (calc2 == '+') {
//     let result = +calc1 + +calc3;
//     alert(result);
// }


// let gameStart = prompt('ведите сумму ставки');
// let range1 = prompt('введите диапазон числа от A');
// let range2 = prompt('введите диапазон числа до B');
// let prize = (range2 - range1)*0.1 + +gameStart;
// alert(`'ваш выигрыш' ${prize}`);
// let number = prompt('ведите число');
// if (gameStart == NaN){
//     alert('введите число');
// }if (range1 == NaN){
//     alert('введите число');
// }if (range2 == NaN){
//     alert('введите число');
// }
// if (number == NaN){
//     alert('введите число');
//     function randomInteger(min, max) {
//         // случайное число от min до (max+1)
//         let rand = min + Math.random() * (max + 1 - min);
//         return Math.floor(rand);
//     }
//
//     alert( randomInteger(range1, range2) );
// }if (number > range2 || number < range1){
//     alert('введите число из заданного диапазона');
// }if (number == randomInteger){
//     alert(`'Поздравляю, вы выиграли ${prize}`)
// }else {
//     alert('Вы проиграли')
// }

// let stone = 'Камень';
// let scissors = 'Ножницы';
// let paper = 'Бумага';
// let vik = prompt('ведите ваш вариант');
// let laneArr = [stone, scissors, paper];
// if (vik == ''){
//     alert('введите правильно вариант ')
// }
//
// let random = laneArr[Math.floor(Math.random() * laneArr.length)];
// if(vik == 'Бумага' && random == 'Камень'){
//     alert('вы выиграли')
// }if (vik == 'Бумага' && random == 'Бумага'){
//     alert('ничия')
// }else {
//     alert('вы проиграли')
// }if(vik == 'Ножницы' && random == 'Бумага'){
//     alert('вы выиграли')
// }if (vik == 'Ножницы' && random == 'Ножницы'){
//     alert('ничия')
// }else {
//     alert('вы проиграли')
// }if(vik == 'Камень' && random == 'Ножницы'){
//     alert('вы выиграли')
// }if (vik == 'Камень' && random == 'Камень'){
//     alert('ничия')
// }else {
//     alert('вы проиграли')
// }










