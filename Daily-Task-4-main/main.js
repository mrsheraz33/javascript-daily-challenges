const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const items = document.querySelector("#studentList");

let currentPage = 1;
const pageSize = 2;
const students = ["Ali", "Ahmed", "Sara", "Ayesha", "Usman", "Hina"];

const pagination = (data, page, pageSize) => {
  let start = (page - 1) * pageSize;
  let end = start + pageSize;

  return data.slice(start, end);
};

function renderData() {
  items.textContent = "";
  let currentData = pagination(students, currentPage, pageSize);

  for (let data of currentData) {
    const li = document.createElement("li");
    li.textContent = data;
    items.append(li);
  }
}

nextBtn.addEventListener("click", () => {
  let totalPage = Math.ceil(students.length / pageSize);

  if (currentPage < totalPage) {
    currentPage++;
    renderData();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderData();
  }
});

renderData();
