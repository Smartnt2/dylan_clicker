//clicker
let count = 0;
function increment() {
   count++;
   document.getElementById("count-el").innerHTML = count;
   console.log(count);
}


function decrement() {
   if(count != 0) {
       count--;
       document.getElementById("count-el").innerHTML = count;
   }
}


function save() {
   document.getElementById("prev-entries").innerHTML += count + " - ";
}
