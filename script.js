/*Задание 1*/

let password = '12345';
let enter = prompt('Введите пароль')
if (password === enter) {
    console.log('Пароль введён верно');
} else {
    console.log('Пароль введён неверно');
}


/*Задание 2*/

let c = prompt('Введите любое число');
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/*Задание 3*/

let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/*Задание 4*/

let a = '2';
let b = '3';
alert(Number(a) + Number(b));