# Exercise 1: Props - Passing Data to Components

## 📝 Learning Objectives

- Understand what props are and how they work
- Learn to pass different types of data as props
- Use props destructuring for cleaner code
- Work with the `children` prop
- Understand that props are read-only (immutable)

## 📚 Background

Props (short for "properties") are how components communicate with each other. They allow you to pass data from a parent component to a child component.

Think of props like function parameters:

```javascript
// Regular function
function greet(name) {
  return `Hello, ${name}`;
}

// React component
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Key Concepts:**

- Props are passed like HTML attributes: `<Component name="value" />`
- Props are read-only - you cannot modify them inside the component
- Props can be any JavaScript value: strings, numbers, booleans, arrays, objects, functions
- There's a special prop called `children` for nested content

## 🎯 Exercise

Create a `HeroCard` component that displays superhero information.

### Requirements:

1. Create a `HeroCard` component that accepts props:
   - `name` (string)
   - `power` (string)
   - `image` (string URL)
   - `realName` (string - optional)
2. Display the hero information in a styled card
3. Use props destructuring for cleaner code
4. Handle optional props (show realName only if provided)
5. Create multiple HeroCard instances with different data

### Bonus Challenges:

- Add a `team` prop and display it
- Create a `Badge` component for the team
- Use default props for missing values
- Add prop validation comments
- Create a `children` prop example

## 💡 Hints

```jsx
// Props with destructuring
function HeroCard({ name, power, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{power}</p>
    </div>
  );
}

// Using the component
<HeroCard
  name="Iron Man"
  power="Genius intellect"
  image="url-to-image"
/>;

// Optional props
function Component({ optional = 'default value' }) {
  // ...
}

// Conditional rendering with optional props
{
  realName && <p>Real Name: {realName}</p>;
}
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- Multiple hero cards displayed
- Each card showing different hero data
- Styled cards with images
- Optional information displayed correctly

## ⏱️ Time

**~20-25 minutes**
