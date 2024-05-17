function heroesThatStartsWith(heroes: string[], letter: string) {
  let newHeroes: string[] = [];
  //for (let i = 0; i < heroes.length; i++) {
  //  let name = heroes[i];
  //  if (name.startsWith(letter)) {
  //    newHeroes.push(name);
  //  }
  // return newHeroes;

  for (let correctName of heroes) {
    if (correctName.startsWith(letter)) {
      newHeroes.push(correctName);
    }
  }
  return newHeroes;
}

let letter = "D";
let heroes = [
  "Doom",
  "Dr. Strange",
  "Hulk",
  "She Hulk",
  "Spiderman",
  "Captain Marvel",
  "Andrea",
];
let herosWithLetterA = heroesThatStartsWith(heroes, letter);
console.log(herosWithLetterA); // She Hulk, Spiderman
