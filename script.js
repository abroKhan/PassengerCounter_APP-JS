let count = 0;
let incrementEl = document.getElementById("count_el");
let saveEl = document.getElementById("save_el");
let clearEl = document.getElementById("clear_el");

function incrementData() {
  count += 1;
  incrementEl.innerText = count;
  //   document.getElementById("count_el").innerHTML = count;
}

function saveData() {
  let saveStr = count + " | ";
  saveEl.textContent += saveStr;
  //   document.getElementById("save_el").innerHTML = saveStr;
  count = 0;
  incrementEl.textContent = "0";
}

function clearData() {
  saveEl.textContent = "Previous entries : ";
}
