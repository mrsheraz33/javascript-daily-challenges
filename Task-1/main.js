const input = document.querySelector("#input");
const para = document.querySelector("#para");

input.addEventListener("input", () => {
  let inputValue = input.value;
  let length = inputValue.length;

  if (length <= 50) {
    para.style.color = "green";
  } else if (length <= 80) {
    para.style.color = "orange";
  } else {
    para.style.color = "red";
  }
  
  para.textContent = length;
});
