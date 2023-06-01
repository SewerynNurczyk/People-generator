const fs = require('fs');

const people = [];

function randChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const genders = ['male', 'female'];
const maleNames = ['John', 'Michael', 'David'];
const femaleNames = ['Emily', 'Jessica', 'Emma'];
const lastNames = ['Smith', 'Johnson', 'Brown'];

for (let i = 0; i < 20; i++) {
  const person = {};

  person.gender = randChoice(genders);
  
  if (person.gender === 'male') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  person.age = Math.floor(Math.random() * 30) + 20;

  people.push(person);
}

console.log(people);

const jsonData = JSON.stringify(people);

// Zapis danych do pliku people.json
fs.writeFile('people.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Something went wrong:', err);
  } else {
    console.log('File has been successfully generated! Check people.json');
  }
});