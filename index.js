// Clock function definition

function updateClock(){
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const timestring = `${hours} : ${minutes} : ${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;
}

updateClock();
setInterval(updateClock, 1000);


// Date function definition

let days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = String(date.getDate()).padStart(2, "0");
const d = date.getDay();

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(`The date is ${days[d]} ${day}-${months[month]}-${year}`)
const myDate = document.getElementById("myDate").textContent = `${days[d]} - ${months[month]} ${day}, ${year}`