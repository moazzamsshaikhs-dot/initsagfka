// data types in javascript
// 1. string = " " or ' ' or ` `
// 2. number    1 2 3 
// 3. boolean   true or false
// 4. null  = null
// 5. undefined  = undefined
// 6. object    { key: value }
// 7. symbol
// array = [1, 2, 3, 4, 5]

// string
// let name = "Hamdan";
// console.log(name);

// // number
// let age = 25;
// console.log(age);

// // boolean
// let isStudent = true;
// console.log(isStudent);

// // null
// let city = null;
// // city = "Karachi";
// console.log(city);

// // undefined
// let country;
// console.log(country);

// // object
// let person = {
//     name: "Hamdan",
//     age: 25,
//     isStudent: true
// };
// console.log(person);

// // moazzam.age = 31;
// // console.log(moazzam);

// // symbol
// let id = Symbol("%");
// console.log(id);

//double coded 
// window.location.href = "https://www.google.com";

// String
let name = 'Hamdan';
// console.log(name);
// Number
// let age = 25;
// console.log(`My name is ${name} and I am ${age} years old.`);


// 9. Ternary operator condition ? exprIfTrue : exprIfFalse
        // let f = true;
        // let result = f ? "f is true" : "f is false";
        // console.log(result);

        // let age = 16; 
        // let status = (age >= 18) ? "Adult" : "Minor";
        // console.log(status); // Adult444

        // while loop
// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }


// Do while loop
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// 1


// let numbers = 5;
// do {
//     console.log(numbers);

//     numbers++;
// } while (numbers < 5);

// // Arrays object
// let fruits = ["apples", "banana", "cherry"];
// // for of loop
// for (let fruit of fruits) {
//     console.log(fruit[5]);
// }   

// fruits.forEach(element => {
//     console.log(element);
// });

// for (let i in fruits) {
//     console.log(fruits[i]);
// }

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.innerHTML = "Hello World";



let fruitsData = []; // Store fetched data globally

async function fetchData() {
  try {
    let response = await fetch("data.json");
    let res = await response.json();
    fruitsData = res.fruits;
    renderFruits(fruitsData); // Display all items initially
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// Function to render cards into the container
function renderFruits(list) {
  let container = document.querySelector(".container");
  container.innerHTML = ""; // Clear existing elements

  if (list.length === 0) {
    container.innerHTML = "<p>No matching fruits found.</p>";
    return;
  }

  list.forEach((e) => {
    container.innerHTML += `
      <div class="card">
        <div>
          <img src="${e.image}" alt="${e.name}">
        </div>
        <h1>${e.name}</h1>
        <p>${e.taste}</p>
        <button class="button">${e.color}</button>
      </div>
    `;
  });
}

// Add event listener for search filter
document.addEventListener("DOMContentLoaded", () => {
  fetchData();

  let input = document.getElementById("input");
  let searchBtn = document.getElementById("search");

  function filterItems() {
    let query = input.value.trim().toLowerCase();

    // Filter by name, color, or taste
    let filtered = fruitsData.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.color.toLowerCase().includes(query) ||
        item.taste.toLowerCase().includes(query)
      );
    });

    renderFruits(filtered);
  }

  // Filter on button click
  searchBtn.addEventListener("click", filterItems);

  // Optional: Real-time filtering as the user types
  input.addEventListener("input", filterItems);
});



