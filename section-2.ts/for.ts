export let limite = 10;

for (let i = 0; i <= limite; i++) {
  if (i === 5) {
    continue;
  }

  console.log("linea", i);

  if (i === 5) {
    break;
  }
}
