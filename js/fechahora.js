//fecha y hora

//creamos un array con los colores de cada dia de la semana
var semana = [
  "#8EB3FC ",
  "#8EFC9E ",
  "#8EFC9E ",
  "#BB4516",
  "#5A0C72",
  "#86840F",
  "#16E4DF",
];

//creamos una funcion que detecte el dia actual, y retorne el numero de ese dia, usandolo como indice para nuestro array semana
function numDia() {
  var fecha = new Date();
  var dia = fecha.getDay();
  nombreDia = semana[dia];
  return dia;
}

//aqui ya podemos crear una funcion que constate el dia y le asigne el respectivo color a la pagina.
function colorDia() {
  var body = document.getElementById("body"); //usamos el id body en nuestro html

  var elegirColor = semana[numDia()];

  body.style.backgroundColor = elegirColor;
}

colorDia(); // llamamos a nuestra funcion