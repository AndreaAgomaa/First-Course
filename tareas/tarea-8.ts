function largestNameOfArray(heroes: string[]) {
  let maxHero = "";
  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].length > maxHero.length) {
      maxHero = heroes[i];
    }
  }
  return maxHero;
}

let heroes = ["Deadpool", "Ciclope", "Magneto", "Profesor Charles Xavier"];
let hero = largestNameOfArray(heroes);
console.log(hero);
