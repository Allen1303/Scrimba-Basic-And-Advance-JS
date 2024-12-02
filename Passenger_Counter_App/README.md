
# Passenger Counter App: A Breakdown
### Understanding the Code

This JavaScript code implements a simple passenger counter app, utilizing `HTML` and `CSS` for the user interface.

### Key Concepts:

#### 1 DOM Manipulation:

- `document.getElementById("count-el")` and document.`getElementById("save-el")` are used to select HTML elements with the IDs `"count-el"` and `"save-el"` respectively.
textContent property is used to modify the text content of these elements.

#### 2 Variables and Data Types:

- `countEl` and `saveEl` are variables that store references to the DOM elements.
count is a numeric variable that keeps track of the passenger count.
- `saveCounter` is a string variable that stores the current count with a dash separator.

 #### 3 Functions:

- `counter()`:
Increments the count variable.
Updates the text content of the countEl element.

- `save()`:
Creates a string saveCounter containing the current count and a dash.
Appends saveCounter to the text content of the `saveEl` element.
Resets the count variable and the `countEl` `textContent`.

#### Special Thanks to Scrimba
This project was inspired by the excellent tutorials and courses offered by Scrimba. Their interactive learning approach has been invaluable in understanding and applying web development concepts.

To learn more about web development and JavaScript, check out Scrimba's courses and tutorials.

<a href="https://scrimba.com">Scrimba</a>

By understanding these core concepts, you can build more complex web applications and enhance your JavaScript skills.