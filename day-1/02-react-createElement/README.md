# Exercise 2: Intro to React with `React.createElement()`

## 📝 Learning Objectives

- Understand the declarative approach of React
- Learn how to use `React.createElement()`
- Set up React via CDN
- Use `ReactDOM.createRoot()` and `root.render()`
- Compare imperative (vanilla JS) vs declarative (React) approaches

## 📚 Background

In the previous exercise, we used vanilla JavaScript to create DOM elements imperatively (step-by-step instructions). React takes a different approach - it's **declarative**. You describe what you want, and React figures out how to make it happen.

Instead of:

```javascript
const element = document.createElement('div');
element.textContent = 'Hello';
document.body.appendChild(element);
```

React does:

```javascript
const element = React.createElement('div', null, 'Hello');
ReactDOM.createRoot(rootElement).render(element);
```

## 🎯 Exercise

Recreate the same "Hello World" output from Exercise 1, but this time using React's `createElement` API.

### Requirements:

1. Include React and ReactDOM via CDN
2. Create a root div in HTML
3. Use `React.createElement()` to create elements
4. Use `ReactDOM.createRoot()` and `render()` to display them
5. Apply styles using the `style` prop

### Bonus Challenges:

- Create nested elements (div containing h1 and p)
- Create multiple sibling elements
- Add event handlers using props
- Experiment with different HTML elements

## 💡 Hints

```javascript
// React.createElement(type, props, ...children)
React.createElement('h1', { className: 'title' }, 'Hello World');

// With styles
React.createElement(
  'div',
  {
    style: { color: 'red', fontSize: '20px' },
  },
  'Styled text',
);

// With nested children
React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Title'),
  React.createElement('p', null, 'Paragraph'),
);
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- "Hello World" displayed using React
- Styled elements
- Check the browser console - no errors should appear

## ⏱️ Time

**~15-20 minutes**
