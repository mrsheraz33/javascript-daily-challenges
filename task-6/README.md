# JavaScript Debounced Search with API

A simple JavaScript project that demonstrates **debounced search input with API integration, loading state, and error handling**.

This project allows the user to type in an input field, waits for **500ms using debounce**, then fetches data from an API and displays filtered results in the DOM.

---

## Features

- Search input field
- 500ms debounce logic
- API data fetching using `fetch()`
- Dynamic DOM rendering
- Loading state
- Error handling
- Case-insensitive search

---

## How It Works

When the user types in the input field:

1. The input event triggers
2. Debounce waits for **500ms**
3. API request is sent
4. Data is filtered based on the search query
5. Matching results are shown in the list

---

## Core Concepts Used

- DOM Manipulation
- `querySelector()`
- `addEventListener()`
- `fetch()`
- `async/await`
- `map()`
- `filter()`
- `includes()`
- Debounce (`setTimeout` + `clearTimeout`)
- Error handling (`try...catch`)

---

## API Used

```text
https://jsonplaceholder.typicode.com/users
```

---

## Search Flow

```text
User types
   ↓
Debounce (500ms)
   ↓
API Call
   ↓
Filter Data
   ↓
Show Results
```

---

## Real World Use Cases

This logic is commonly used in:

- Google search suggestions
- YouTube search
- Product search bars
- User search systems
- Admin dashboards

---

## Author

**Muhammad Sheraz**
