# Exercise 3: Event Handling

## 📝 Learning Objectives

- Learn how to handle events in React
- Understand event handler syntax and patterns
- Pass arguments to event handlers
- Work with common events (onClick, onChange, onSubmit)
- Access event objects and their properties

## 📚 Background

React events are similar to DOM events but with some differences:

- React events are named using camelCase: `onClick`, `onChange`, `onSubmit`
- You pass functions as event handlers, not strings
- You cannot return `false` to prevent default behavior; must call `preventDefault()`

**DOM vs React:**

```html
<!-- HTML -->
<button onclick="handleClick()">Click</button>

<!-- React JSX -->
<button onClick="{handleClick}">Click</button>
```

**Event Handler Patterns:**

```jsx
// Function reference
<button onClick={handleClick}>Click</button>

// Inline arrow function
<button onClick={() => alert('Clicked!')}>Click</button>

// With parameters
<button onClick={() => handleClick(id)}>Click</button>

// With event object
<button onClick={(e) => handleClick(e, id)}>Click</button>
```

## 🎯 Exercise

Add interactive functionality to the hero cards using event handlers.

### Requirements:

1. Add a "Favorite" button to each HeroCard
2. Handle button clicks to show alerts
3. Add hover effects using onMouseEnter and onMouseLeave
4. Pass the hero's name to the click handler
5. Style buttons based on interaction states

### Bonus Challenges:

- Add a "View Details" button that shows hero info
- Create a form with onChange handlers
- Add keyboard event handlers (onKeyDown)
- Prevent default behavior on form submission
- Track which button was clicked and display it

## 💡 Hints

```jsx
// Basic onClick
<button onClick={() => alert('Clicked!')}>Click</button>

// Function reference
const handleClick = () => {
  console.log('Button clicked');
};
<button onClick={handleClick}>Click</button>

// With parameters
const handleClick = (name) => {
  alert(`Clicked ${name}`);
};
<button onClick={() => handleClick('Iron Man')}>Click</button>

// Event object
const handleChange = (event) => {
  console.log(event.target.value);
};
<input onChange={handleChange} />

// Mouse events
<div
  onMouseEnter={() => console.log('Mouse entered')}
  onMouseLeave={() => console.log('Mouse left')}
>
  Hover me
</div>

// Prevent default
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted');
};
<form onSubmit={handleSubmit}>...</form>
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- Hero cards with clickable buttons
- Alerts showing when buttons are clicked
- Visual feedback on hover
- Proper event handling without page refreshes

## ⏱️ Time

**~15-20 minutes**
