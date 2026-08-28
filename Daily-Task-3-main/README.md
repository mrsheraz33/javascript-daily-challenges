# Debounced Search (JavaScript)

## Overview

This is a small JavaScript project that demonstrates how **debouncing** works in a search input.

When a user types quickly in the input field, the search function does not run immediately on every keystroke.
Instead, it waits for a short delay and then runs the function once. This helps avoid unnecessary function calls and improves performance.

---

## Features

* Real-time search filtering
* Debounce implementation
* Dynamic DOM updates
* Case-insensitive search

---

## How It Works

### 1. Data Source

An array of fruits is used as the data source.

Example:

* Apple
* Banana
* Cherry
* Mango
* Strawberry

---

### 2. Search Function

The `search()` function:

* Takes a query from the input
* Filters the array using `filter()`
* Displays matching results in the DOM

---

### 3. Debounce Function

The `debounce()` function delays execution of the search function.

Logic:

1. A timer is created.
2. If the function is called again before the delay ends, the timer is cleared.
3. The function runs only after the user stops typing for the specified delay.

Delay used in this project:
500ms

---

### 4. Event Listener

An `input` event listener is attached to the input field.

When the user types:

1. The input value is captured.
2. The debounced search function is called.
3. Results are displayed after the delay.

---

## Technologies Used

* HTML
* JavaScript (Vanilla JS)
* DOM Manipulation

---

## Purpose

This project is created to practice:

* JavaScript event handling
* Debounce logic
* DOM manipulation
* Function context using `apply()`

---

## Author

Muhammad Sheraz
