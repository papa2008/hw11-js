// 1.
// const movie = {
//     title: "The Dota",
//     directors: "Moseychuwink, feeling yoshi",
//     year: 2026,
//     rating: 10.10,
//     isHighRated() {
//         return this.rating > 8;
//     }
// }
// console.log("Назва фільму:", movie.title);
// console.log("Назва фільму:", movie.directors);
// console.log("Назва фільму:", movie.rating);
// console.log("Назва фільму:", movie.year);
// console.log(movie);
// movie.isHighRated();
// 2.
const user = {
    name: "Іван",
    email: "ivan@example.com",
    password: "123456",
    login(inputEmail, inputPassword) {
        if (inputEmail === this.email && inputPassword === this.password) {
            return true;
        } else {
            return false;
        }
    }
};
const inputEmail = prompt("Введіть ваш email:");
const inputPassword = prompt("Введіть ваш пароль:");
if (user.login(inputEmail, inputPassword)) {
    alert("Вхід успішний!");
} else {
    alert("Невірний email або пароль.");
}

    