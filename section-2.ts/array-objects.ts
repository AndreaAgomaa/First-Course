export interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

let juan: Person = {
  name: "Juan",
  age: 20,
  isActive: true,
};

let maria: Person = {
  name: "Maria",
  age: 13,
  isActive: true,
};

let pablo: Person = {
  name: "Pablo",
  age: 66,
  isActive: true,
};

let people: Person[] = [juan, maria, pablo];

for (let i = 0; i < people.length; i++) {
  let person = people[i];
  console.log(person.name, " ", person.age);
}
