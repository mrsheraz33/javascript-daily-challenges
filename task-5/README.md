# JavaScript Infinite Scroll (Concept Level)

A simple JavaScript project that demonstrates the **basic logic of Infinite Scroll**.

This project listens to the window scroll event and checks when the user reaches the bottom of the page. Once the bottom is reached, it simulates loading the next page of data.

---

## Features

- Scroll event listener
- Bottom detection logic
- Page increment system
- Loading state handling
- Beginner-friendly code

---

## How It Works

The application checks whether the user has reached the bottom of the page using this condition:

```js
window.innerHeight + window.scrollY >= document.body.offsetHeight
