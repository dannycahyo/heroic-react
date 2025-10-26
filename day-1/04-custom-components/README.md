# Exercise 4: Creating Custom Components

## 📝 Learning Objectives

- Understand what React components are
- Learn to create function components
- Follow component naming conventions
- Compose components together
- Pass basic props to components

## 📚 Background

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

Think of components like JavaScript functions:

- They accept inputs (called "props")
- They return React elements describing what should appear on screen
- They can be reused multiple times

**Component Rules:**

1. Component names must start with a capital letter (PascalCase)
2. Components must return JSX (or null)
3. Components are just functions!

```jsx
// This is a component
function Welcome() {
  return <h1>Hello!</h1>;
}

// Use it like an HTML tag
<Welcome />;
```

## 🎯 Exercise

Create your first custom React components and compose them together.

### Requirements:

1. Create a `Greeting` component that displays a welcome message
2. Create a `Card` component that wraps content with styling
3. Use your components in the main app
4. Accept a `name` prop in the Greeting component
5. Compose components (use one component inside another)

### Bonus Challenges:

- Create a `Button` component with an `onClick` prop
- Create a `Hero` component that displays hero information
- Use the `children` prop
- Create multiple instances of the same component

## 💡 Hints

```jsx
// Simple component
function Greeting() {
  return <h1>Hello!</h1>;
}

// Component with props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using destructuring
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using the component
<Greeting name="John" />;

// Children prop
function Card(props) {
  return <div className="card">{props.children}</div>;
}

<Card>
  <h1>Title</h1>
  <p>Content</p>
</Card>;
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- Your custom components rendered on the page
- Multiple instances of components
- Components composed together

## ⏱️ Time

**~10-15 minutes**
