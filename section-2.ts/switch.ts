export let weekDay = 8; // lunes=1, martes=2, miercoles=3, jueves=4, viernes=5, sabado=6, domingo=7;

if (weekDay <= 0) {
  throw new Error("Dia de la semana no permitido");
}

switch (weekDay) {
  case 1:
    console.log("Es lunes");
    break;

  case 2:
    console.log("Es martes");
    break;

  case 3:
    console.log("Es Miercoles");
    break;

  case 4:
    console.log("Es jueves");
    break;

  case 5:
    console.log("Es viernes");
    break;

  case 6:
    console.log("Es sabado");
    break;

  case 7:
    console.log("Es domingo");
    break;

  default:
    console.log("No es un dia de la semana");
}
