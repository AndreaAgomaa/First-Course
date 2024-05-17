export let person = {
  name: "Andrea",
  age: 18,
  hobbies: ["futbol", "basquetbool"],
  allDate() {
    let objectString = this.name + " " + this.age;
    console.log(objectString);
  },
};

//console.log(person.name.length);
//person.allDate();

let car = {
  brand: "Toyota",
  doors: 5,
  color: "gris",
  isActive: true,
};

let tv = {
  marca: "Samsung",
  sizeInches: 40,
  year: 2023,
  bocinas: 2,
};

let youtubevideo = {
  lengthMin: 3.5,
  userName: "Andrex",
  likes: 1000,
  comments: ["The best video", "So fun", "Jajajaja"],
};

console.log(car);
console.log(tv);
console.log(youtubevideo);
