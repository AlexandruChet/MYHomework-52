// const names = ["marko", "nadia", "ben", "alen", "noe"];
// console.log(names[2]);
// console.log(names.length);

// for (let i = 0; i < names.length; i++) {
//     console.log((i + 1) + " - " + names[i]);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`${numbers[i]} * 7 = ${numbers[i] * numbers[6]}`);
// }

// let cost;
// const subscription = 'premium';
// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;
//   case 'pro':
//     cost = 100;
//     break;
//   case 'premium':
//     cost = 500;
//     break;
//   default:
//     console.log('Invalid subscription type');
// }
// console.log(cost); // 500

// let myNumber = prompt('Введіть число:')

// if (myNumber >= 55 && myNumber <= 99) {
// 	console.log('Все Ок')
// } else {
// 	console.log('Не Ок')
// }

// let RokiMaksima = 55;

// if (RokiMaksima >= 0 && RokiMaksima <= 16) {
//     console.log("Діти");
// }
// else if (RokiMaksima >= 17 && RokiMaksima <= 60) {
//     console.log("Дорослі");
// }
// else if (RokiMaksima >= 61 && age <= 100) {
//     console.log("Пенсія");
// } else {
//     console.log("Вік не підходить до жодної групи");
// }

// let nameViktor = "Віктор";
// let Stashko = "Сташко";

// if (nameViktor.length > 4 && Stashko.length > 5) {
//     console.log(nameViktor.length + Stashko.length);
// } else {
//     console.log("УПС");
// }

let num = Math.round(Math.random() * 4)

if (num === 1) {
	console.log('Number is 1')
} else if (num === 2) {
	console.log('Number is 2')
} else if (num === 3) {
	console.log('Number is 3')
} else if (num === 4) {
	console.log('Number is 4')
} else {
	console.log('Number is 5')
}


let lang = 'fr';

switch (lang) {
    case 'ua':
        console.log("Janvier");
        break;
    case 'en':
        console.log("Janvier");
        break;
    case 'ru':
        console.log("Janvier");
        break;
    case 'fr':
        console.log("Janvier");
        break;
}
