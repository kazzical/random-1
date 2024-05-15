


let array1 = [1, 2, 3];
let var1 = array1[2];


for (let i = 1; i <= 20; i++ ) {
  console.log(i);
}


for (let i = 1; i <= 20; i++ ) {
  if (i%2 ==0) {
    console.log(i);
  }
}

function a(k) {
  return k*2.75;
}
let p = document.querySelector("p");
let button = document.querySelector("button");

 button.addEventListener('click', function() {
  p.innerHTML = "HAIII";
});