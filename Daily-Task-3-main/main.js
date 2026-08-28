const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Mango",
  "Orange",
  "Pineapple",
  "Strawberry",
];

function serach(query) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  if (query.trim() === "") return;
  let newItems = items.filter((item) => {
    return item.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  });

  newItems.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = item;
    result.appendChild(newDiv);
  });
}

const debounse = function (fun, delay) {
  let timer;
  return function (...argu) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(this);
      fun.apply(this, argu);
    }, delay);
  };
};

const input = document.querySelector("#input");
const newFun = debounse(serach, 500);

input.addEventListener("input", function (e) {
  newFun(e.target.value);
});
