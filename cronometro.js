var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
let rows = [];
let groups = [1, 1, 1];

function grupo() {
  bodyTable;
}

function addRow() {
  const table = document.getElementById("table");
  const newRow = table.insertRow(-1);
  const celda1 = newRow.insertCell(0);
  const celda2 = newRow.insertCell(1);
  const celda3 = newRow.insertCell(2);
  rows.push([celda1, celda2, celda3]);
  console.log(rows);
}

function timeGroup(nGroup) {
  nrow = groups[nGroup];
  if (nrow > rows.length) {
    addRow();
  }
  groups[nGroup]++;
  console.log({ groups, nrow });
  rows[nrow - 1][
    nGroup
  ].innerHTML = `${horas}:${minutos}:${segundos}.${centesimas}`;
}

function inicio() {
  control = setInterval(cronometro, 10);
  document.getElementById("inicio").disabled = true;
  document.getElementById("parar").disabled = false;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = false;
}
function parar() {
  clearInterval(control);
  document.getElementById("parar").disabled = true;
  document.getElementById("continuar").disabled = false;
}
function reinicio() {
  clearInterval(control);
  centesimas = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  Centesimas.innerHTML = ":00";
  Segundos.innerHTML = ":00";
  Minutos.innerHTML = ":00";
  Horas.innerHTML = "00";
  document.getElementById("inicio").disabled = false;
  document.getElementById("parar").disabled = true;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = true;
}
function cronometro() {
  if (centesimas < 99) {
    centesimas++;
    if (centesimas < 10) {
      centesimas = "0" + centesimas;
    }
    Centesimas.innerHTML = ":" + centesimas;
  }
  if (centesimas == 99) {
    centesimas = -1;
  }
  if (centesimas == 0) {
    segundos++;
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    Segundos.innerHTML = ":" + segundos;
  }
  if (segundos == 59) {
    segundos = -1;
  }
  if (centesimas == 0 && segundos == 0) {
    minutos++;
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    Minutos.innerHTML = ":" + minutos;
  }
  if (minutos == 59) {
    minutos = -1;
  }
  if (centesimas == 0 && segundos == 0 && minutos == 0) {
    horas++;
    if (horas < 10) {
      horas = "0" + horas;
    }
    Horas.innerHTML = horas;
  }
}
