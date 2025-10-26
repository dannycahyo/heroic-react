# Exercise 3: JSX - JavaScript XML

## 📝 Learning Objectives

- Understand what JSX is and why it's useful
- Learn JSX syntax rules and conventions
- Set up Babel for JSX transformation
- Use JavaScript expressions in JSX
- Compare JSX with `React.createElement()`

## 📚 Background

Writing `React.createElement()` is verbose and hard to read, especially with nested elements. JSX is a syntax extension that looks like HTML but is actually JavaScript.

**Before (createElement):**

```javascript
React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h1', null, 'Title'),
  React.createElement('p', null, 'Content'),
);
```

**After (JSX):**

```jsx
<div className="card">
  <h1>Title</h1>
  <p>Content</p>
</div>
```

JSX gets transformed (compiled) into `React.createElement()` calls by Babel.

## Important JSX Rules

1. Use `className` instead of `class`
2. Use `htmlFor` instead of `for`
3. Use camelCase for attributes (onClick, onChange, etc.)
4. Self-closing tags must end with `/>` (e.g., `<img />`, `<input />`)
5. Use curly braces `{}` for JavaScript expressions
6. Style attribute takes an object: `style={{ color: 'red' }}`

## 🎯 Exercise

Convert the `React.createElement()` code from Exercise 2 to JSX syntax.

### Requirements:

1. Include Babel Standalone for JSX transformation
2. Use JSX to create the same elements
3. Use JavaScript expressions in JSX (variables, functions)
4. Apply styles using the JSX style attribute
5. Change script type to `text/babel`

### Bonus Challenges:

- Use variables to store data (name, message)
- Create a dynamic greeting using expressions
- Conditionally render elements
- Use template literals in JSX

## 💡 Hints

```jsx
// Basic JSX
const element = <h1>Hello World</h1>;

// With JavaScript expressions
const name = 'John';
const element = <h1>Hello, {name}!</h1>;

// With attributes
<div className="container" id="main">Content</div>

// With styles
<div style={{ color: 'red', fontSize: '20px' }}>Styled</div>

// Self-closing
<img src="image.jpg" alt="Description" />

// Conditional rendering
{isLoggedIn && <WelcomeMessage />}
{isLoggedIn ? <Logout /> : <Login />}
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- The same output as Exercise 2
- Code that's much easier to read and write
- Check browser console for any JSX syntax errors

## ⏱️ Time

**~20-25 minutes**
