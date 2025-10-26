# Exercise 1: Basic JavaScript-rendered Hello World

## 📝 Learning Objectives

- Understand what the DOM (Document Object Model) is
- Learn how to create and manipulate DOM elements with vanilla JavaScript
- Use `document.createElement()`, `appendChild()`, and element properties
- Build a foundation for understanding how React works under the hood

## 📚 Background

Before React, developers manipulated the DOM directly using JavaScript. Understanding this is crucial because React does similar things under the hood, just in a more efficient and declarative way.

The browser takes HTML and creates a tree structure called the DOM. JavaScript can interact with this DOM to create, modify, or remove elements dynamically.

## 🎯 Exercise

Create a simple webpage that displays "Hello World" using **only JavaScript** (no HTML content in the body).

### Requirements:

1. Create a `div` element
2. Set its text content to "Hello World"
3. Add a class name "container"
4. Style it with some CSS properties (via JavaScript)
5. Append it to the document body

### Bonus Challenges:

- Add a second element with your name
- Create a button that changes the text when clicked
- Apply multiple CSS styles to make it visually appealing
- Create a function to generate multiple elements

## 💡 Hints

- Use `document.createElement('tagName')` to create elements
- Use `element.textContent` or `element.innerText` to set text
- Use `element.className` to set CSS classes
- Use `element.style.propertyName` to set inline styles
- Use `document.body.appendChild(element)` to add to the page

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- "Hello World" displayed on the page
- The element should have styling applied

## ⏱️ Time

**~10-15 minutes**
