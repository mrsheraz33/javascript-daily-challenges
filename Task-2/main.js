const btn = document.querySelector("#btn");
const items = document.querySelector("#items");
const error1 = document.querySelector("#error");

btn.addEventListener("click", async () => {
  error1.textContent = "Loading...";
  items.textContent = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network Error!");
    }
    const data = await response.json();
    error1.textContent = "";

    data.slice(0, 8).forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      items.appendChild(li);
    });
  } catch (error) {
    error1.textContent = error?.message || "Something went worng!";
  }
});
