let add = document.querySelector(".btn_increment");
let remove = document.querySelector(".btn_decrement");

let numInt = document.querySelector(".num");
let int = 0;

add.addEventListener("click", function () {
  int += 1;
  numInt.innerHTML = int;
});
remove.addEventListener("click", function () {
  int -= 1;
  numInt.innerHTML = int;
});
