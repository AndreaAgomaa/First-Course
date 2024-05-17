import { error } from "console";

export function printMultiplicationTables(
  numb1: number = 1,
  numb2: number = 10
) {
  if (numb2 <= 0) {
    throw new error("numero no valido");
  }
  for (let i = 0; i <= numb2; i++) {
    console.log(numb1, "*", i, "=", numb1 * i);
  }
}
