//Define all the variables required.
let nameContainer = document.getElementById("name-container");
let firstName = document.getElementById("first-text");
let secondName = document.getElementById("second-text");
let button = document.getElementById("name-button");
let nameExtender = document.getElementById("name-extender");

//create my array of the first names.
const firstNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emily",
  "Fiona",
  "George",
  "Hannah",
  "Isabel",
  "Jack",
  "Katherine",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Penelope",
  "Quinn",
  "Ryan",
  "Sophia",
  "Thomas",
  "Ursula",
  "Victoria",
  "William",
  "Xander",
  "Yasmine",
  "Zachary",
  "Ava",
  "Benjamin",
  "Catherine",
  "Daniel",
  "Ella",
  "Frederick",
  "Grace",
  "Henry",
  "Isabella",
  "James",
  "Kylie",
  "Lucas",
  "Mila",
  "Nathan",
  "Oliver",
  "Paige",
  "Quincy",
  "Rachel",
  "Samuel",
  "Taylor",
  "Ulysses",
  "Violet",
  "Wesley",
  "Xavier",
  "Yvonne",
  "Zoe",
];

//create my array of the first names.

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "García",
  "Rodriguez",
  "Martinez",
  "Hernández",
  "López",
  "González",
  "Perez",
  "Wilson",
  "Lee",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Walker",
  "Hall",
  "Young",
  "Allen",
  "Lewis",
  "King",
  "Wright",
  "Scott",
  "Hill",
  "Green",
  "Adams",
  "Baker",
  "Hall",
  "Carter",
  "Nelson",
  "Mitchell",
  "Phillips",
  "Evans",
  "Turner",
  "Parker",
  "Edwards",
  "Collins",
  "Stewart",
  "Sanchez",
  "Morris",
];

//Create a function for my  first names to be randomly selected.

function randomFirstNames() {
  let randomIndex = Math.floor(Math.random() * firstNames.length);
  let randomFirstName = firstNames[randomIndex];
  displayFirstNames(randomFirstName);
}

//Create a function for my last names to be randomly selected.

function randomSecondNames() {
  let randomSecondIndex = Math.floor(Math.random() * lastNames.length);
  let randomSecondName = lastNames[randomSecondIndex];
  displaySecondNames(randomSecondName);
}

//Create a function to display first names in individual containers.
function displayFirstNames(randomFirstName) {
  nameExtender.innerHTML += `
   <div class="containers">
   <div class="left-container">
    <p id="first-text" class="name-text">${randomFirstName}</p>
        </div>
         </div>

  `;
}

//Create a function to display second names in individual containers.
function displaySecondNames(randomSecondName) {
  nameExtender.innerHTML += `
  <div class="containers">
   <div class="right-container">
           <p id="second-text" class="name-text">${randomSecondName}</p>
        </div>
         </div>

  `;
}

//Add both functions to be added to the button for event handling.
function combinedNames() {
  randomFirstNames();
  randomSecondNames();
}

button.addEventListener("click", combinedNames);
