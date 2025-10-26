# React Cheat Sheet

## CDN Links

### React + ReactDOM (Production)

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>
```

### React + ReactDOM (Development - Better errors)

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

### Babel Standalone (for JSX)

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## React Basics

### Creating Elements

```javascript
// With React.createElement
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!',
);

// With JSX (requires Babel)
const element = <h1 className="greeting">Hello, world!</h1>;
```

### Rendering to DOM

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

## Components

### Function Component

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// Concise arrow function
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
```

### Using Components

```javascript
// Self-closing if no children
<Welcome name="Sara" />

// With children
<Welcome name="Sara">
  <p>Welcome message</p>
</Welcome>
```

## Props

### Passing Props

```javascript
<MyComponent
  name="John"
  age={30}
  isActive={true}
  items={['a', 'b', 'c']}
/>
```

### Receiving Props

```javascript
function MyComponent(props) {
  return <div>{props.name}</div>;
}

// With destructuring
function MyComponent({ name, age, isActive }) {
  return (
    <div>
      {name} is {age} years old
    </div>
  );
}
```

### Children Prop

```javascript
function Card(props) {
  return <div className="card">{props.children}</div>;
}

<Card>
  <h1>Title</h1>
  <p>Content</p>
</Card>;
```

## JSX Rules

### JavaScript Expressions

```javascript
const name = 'John';
<h1>Hello, {name}</h1>
<h1>Result: {2 + 2}</h1>
<h1>Time: {new Date().toLocaleTimeString()}</h1>
```

### Attributes

```javascript
// Use camelCase for attributes
<div className="container" onClick={handleClick}>
<input type="text" onChange={handleChange} />
<label htmlFor="name">Name</label>

// Style as object
<div style={{ color: 'red', fontSize: '20px' }}>Text</div>
```

### Conditional Rendering

```javascript
// Ternary operator
{
  isLoggedIn ? <LogoutButton /> : <LoginButton />;
}

// Logical AND
{
  isLoggedIn && <WelcomeMessage />;
}

// If-else (outside JSX)
if (isLoggedIn) {
  return <LogoutButton />;
} else {
  return <LoginButton />;
}
```

### Lists

```javascript
const items = ['Apple', 'Banana', 'Orange'];

// Map to components
{
  items.map((item, index) => <li key={index}>{item}</li>);
}

// With objects (use unique id as key)
const heroes = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Spider-Man' },
];

{
  heroes.map((hero) => <div key={hero.id}>{hero.name}</div>);
}
```

## Hooks

### useState

```javascript
const [count, setCount] = React.useState(0);

// Update state
setCount(count + 1);
setCount((prevCount) => prevCount + 1); // Functional update

// Multiple state variables
const [name, setName] = React.useState('');
const [age, setAge] = React.useState(0);
const [isActive, setIsActive] = React.useState(false);
```

### useEffect

```javascript
// Run on every render
React.useEffect(() => {
  console.log('Component rendered');
});

// Run once on mount
React.useEffect(() => {
  console.log('Component mounted');
}, []);

// Run when dependencies change
React.useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// Cleanup function
React.useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(timer); // Cleanup
}, []);
```

## Event Handling

### Common Events

```javascript
// Click
<button onClick={handleClick}>Click me</button>

// Change (inputs)
<input onChange={handleChange} />

// Submit (forms)
<form onSubmit={handleSubmit}>

// Mouse events
<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

// Keyboard events
<input onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
```

### Event Handlers

```javascript
// Inline
<button onClick={() => alert('Clicked!')}>Click</button>;

// Function reference
const handleClick = () => {
  alert('Clicked!');
};
<button onClick={handleClick}>Click</button>;

// With parameters
const handleClick = (id) => {
  console.log('Clicked:', id);
};
<button onClick={() => handleClick(123)}>Click</button>;

// Event object
const handleChange = (event) => {
  console.log(event.target.value);
};
<input onChange={handleChange} />;
```

## Controlled Components (Forms)

```javascript
function Form() {
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Common Patterns

### Fetching Data

```javascript
const [data, setData] = React.useState(null);
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(null);

React.useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
return <div>{/* Render data */}</div>;
```

### Toggle State

```javascript
const [isOpen, setIsOpen] = React.useState(false);

// Toggle
<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>

// Using functional update
<button onClick={() => setIsOpen(prev => !prev)}>Toggle</button>
```

### Array State

```javascript
const [items, setItems] = React.useState([]);

// Add item
setItems([...items, newItem]);
setItems((prevItems) => [...prevItems, newItem]);

// Remove item
setItems(items.filter((item) => item.id !== idToRemove));

// Update item
setItems(
  items.map((item) =>
    item.id === idToUpdate ? { ...item, ...updates } : item,
  ),
);
```

## Rules of Hooks

1. ✅ Only call hooks at the top level (not in loops, conditions, or nested functions)
2. ✅ Only call hooks from React function components or custom hooks
3. ✅ Use the same hooks in the same order on every render

## Debugging Tips

```javascript
// Console log in JSX
{
  console.log('Rendering with:', props) || null;
}

// Display state for debugging
<pre>{JSON.stringify(state, null, 2)}</pre>;

// React DevTools
// Install React Developer Tools browser extension
```

## Resources

- [React Official Docs](https://react.dev)
- [React Beta Docs (Learn)](https://react.dev/learn)
- [MDN Web Docs](https://developer.mozilla.org)
