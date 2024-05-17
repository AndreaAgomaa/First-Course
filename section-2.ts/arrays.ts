export let flowers: string[] = ["rosa", "girasol", "margarita"];
let employes: string[] = ["Fernando", "Maria", "Sara"];
let salaries: number[] = [1500, 2000, 3000];

for (let i = 0; i <= employes.length - 1; i++) {
  let salarie = salaries[i];
  let employe = employes[i];
  console.log(employe, "tiene un salario de", salarie);
}

//for (let i = 0; i < flowers.length; i++) {
//  console.log(flowers[i]);
//}
