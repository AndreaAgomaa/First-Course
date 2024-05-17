export let grade = 50;
let gradeLatter: string;

if (grade >= 90) {
  gradeLatter = "A";
} else if (grade >= 80) {
  gradeLatter = "B";
} else if (grade >= 70) {
  gradeLatter = "C";
} else if (grade >= 60) {
  gradeLatter = "D";
} else {
  gradeLatter = "F";
}

console.log("La nota del alumno es de", gradeLatter);
