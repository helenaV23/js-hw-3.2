let result = 0;
let question1 = prompt("Скільки буде 2+2?");

if (question1 === "4") {
    alert("Правильно!");
    result += 10;
} else {
    alert("Ви відповіли неправильно");
}

let question2 = prompt("Сонце встає на сході?");

if (question2 === "так" || question2 === "yes") {
    alert("Правильно");
    result += 10;
} else {
    alert("Ви відповіли неправильно");
}

let question3 = prompt("Скільки буде 5 / 0?");

if (question3 === "infinity" || question3 === "помилка") {
    alert("Правильно");
    result += 10;
} else {
    alert("Ви відповіли неправильно");
}

let question4 = prompt("Якого кольору небо?");

if (question4 === "блакитне" || question4 === "синє") {
    alert("Правильно");
    result += 10;
} else {
    alert("Ви відповіли неправильно");
}

let question5 = prompt("Яка правильна відповідь на головне питання життя, всесвіту і всього такого?");

if (question5 === "42") {
    alert("Правильно");
    result += 10;  
} else {
    alert("Ви відповіли неправильно");
}

alert(`Ваш результат ${result}`);
