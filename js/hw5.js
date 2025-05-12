// 1. Створіть змінну, що симулює вибір варіанта зі списку. 
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". 
// Використайте switch

const choiceDrink = prompt("Виберіть варіант: Кава, Чай або Сік").toUpperCase()

switch (choiceDrink) {
    case "КАВА":
    console.log("Кава");
    break;

    case "ЧАЙ":
    console.log("Чай");
    break;

    case "СІК":
    console.log("Сік");
    break;

    default:
        console.log("Невірно ввели текст або такого напою немає");
        break;
}

// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня. 
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

let day
const choiceDay = prompt("Введіть день тижня").toLowerCase();

if (choiceDay === "понеділок" || choiceDay === "вівторок" || choiceDay === "середа" 
    || choiceDay === "четвер" || choiceDay === "п'ятниця") {
        day = "робочий день"
} else if (choiceDay === "субота" || choiceDay === "неділя") {
    day = "вихідний день"
} else {
    day = "НЕ ДЕНЬ НЕДІЛІ";
}
console.log(day);

// 3. Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

// nom1
let season
const monthNumber = Number(prompt("Введіть номер місяця"))

if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    season = "Зима"
} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    season = "Весна"
} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    season = "Літо"
} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    season = "Осінь"
} else {
    season = "Такого місяца немає"
}
console.log(season);
// nom2
// let season
// const monthNumber = Number(prompt("Введіть номер місяця"))

// if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//     season = "Зима"
// } else if (monthNumber >= 3 && monthNumber <= 5) {
//     season = "Весна"
// } else if (monthNumber >= 6 && monthNumber <= 8) {
//     season = "Літо"
// } else if (monthNumber >= 9 && monthNumber <= 11) {
//     season = "Осінь"
// } else {
//     season = "Такого місяца немає"
// }
// console.log(season);

// 4. Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let color = "";
const saveoneColor = prompt("Виберіть один з кольорів і впишіть в поле - черовний, зелений, жовтий").trim().toLowerCase();

switch (saveoneColor) {
    case "червоний":
        color = "стоп";
        break;
    case "зелений":
        color = "йти";
        break;
    case "жовтий":
        color = "чекати";
        break;
    default:
        console.log("Невірний вибір");
        break;
}
console.log(color);


// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select). 
// Виконайте відповідну операцію та виведіть результат. 
// У випадку ділення на нуль — виведіть попередження.

let countNum
const firstNumber = Number(prompt("Введіть перше число"));
const secondNumber = Number(prompt("Введіть друге число"));

const operators = prompt("Виберіть оператора +,-,/,*").trim();

if (operators === "+") {
    countNum = firstNumber + secondNumber;
} else if (operators === "-") {
    countNum = firstNumber - secondNumber;
} else if (operators === "*") {
    countNum = firstNumber * secondNumber;
} else if (operators === "/") {
    if (secondNumber === 0) {
        countNum = "ділити на ноль не можна"
    } else {
        countNum = firstNumber / secondNumber
    }

} else {
    countNum = "Дані введені неправельно"
}
console.log(countNum);



