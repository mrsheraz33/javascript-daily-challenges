const input = document.querySelector("#input");
const loading = document.querySelector("#loading");
const error = document.querySelector("#error");
const items = document.querySelector("#items");

const search = async function (query) {
  error.textContent = "";

  if (query.trim() === "") {
    items.innerHTML = "";
    loading.textContent = "";
    return;
  }

  loading.textContent = "Loadind...";

  try {
    items.innerHTML = "";
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();

    const filterData = data
      .map((item) => item.name)
      .filter((item) => item.toLowerCase().includes(query.toLowerCase()));

    loading.textContent = "";

    for (let user of filterData) {
      const li = document.createElement("li");
      li.style.listStyle = "none";
      li.textContent = user;
      items.append(li);
    }
  } catch (err) {
    loading.textContent = "";
    error.textContent = err?.message || "Something went wrong";
  }
};

const debounce = function (fun, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
};

const newFun = debounce(search, 500);

input.addEventListener("input", (e) => {
  newFun(e.target.value);
});
