let page = 1;
let isLoading = false;

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    !isLoading
  ) {
    isLoading = true;
    page++;

    console.log("Show Page:", page);

    setTimeout(() => {
      isLoading = false;
    }, 1000);
  }
});
