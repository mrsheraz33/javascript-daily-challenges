# JavaScript DOM Pagination

A simple pagination project built with **HTML and JavaScript DOM**.

This project displays a list of students with **Previous** and **Next** buttons to navigate between pages.

---

## Features

- Simple DOM manipulation
- Pagination using `slice()`
- Next button functionality
- Previous button functionality
- Dynamic page rendering
- Clean and beginner-friendly code

---

## How It Works

The students array is divided into pages using JavaScript pagination logic.

```js
const start = (page - 1) * pageSize;
const end = start + pageSize;

return data.slice(start, end);
