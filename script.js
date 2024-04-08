const output = document.querySelector(".output");
const para = document.createElement("p");
output.appendChild(para);

function rocket() {
  for (i = 10; i > 0; i--) {
    console.log(i);
  }
}

rocket();
