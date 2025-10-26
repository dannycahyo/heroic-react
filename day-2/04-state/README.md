# Exercise 4: State with `useState` Hook

## 📝 Learning Objectives

- Understand what state is and why it's needed
- Learn the `useState` hook syntax
- Update state and trigger re-renders
- Understand the difference between state and props
- Manage multiple state variables
- Work with different state types (strings, numbers, booleans, arrays, objects)

## 📚 Background

**State** is data that changes over time in your component. When state changes, React re-renders the component to reflect the new data.

**Props vs State:**

- **Props**: Passed from parent, read-only, like function parameters
- **State**: Managed within component, can change, causes re-renders

**The useState Hook:**

```jsx
const [value, setValue] = useState(initialValue);
```

- `value`: Current state value
- `setValue`: Function to update the state
- `initialValue`: Starting value

**Important Rules:**

1. Hooks must be called at the top level (not in loops/conditions)
2. State updates are asynchronous
3. State updates trigger re-renders
4. Never mutate state directly - always use the setter function

## 🎯 Exercise

Make the hero gallery interactive using state!

### Requirements:

1. **Counter**: Create a simple counter with increment/decrement buttons
2. **Favorites**: Track favorited heroes and toggle them
3. **Search**: Filter heroes based on search input
4. **Form**: Create a controlled input for adding new heroes (bonus)

### Specific Tasks:

- Use `useState` for counter, favorites, and search term
- Make the favorite button work (toggle favorite status)
- Filter displayed heroes based on search input
- Display count of favorited heroes

### Bonus Challenges:

- Add a "Clear All Favorites" button
- Create a form to add new heroes
- Track which hero card is currently hovered
- Add a "Show only favorites" toggle
- Persist favorites to localStorage

## 💡 Hints

```jsx
// Basic useState
const [count, setCount] = React.useState(0);

// Update state
setCount(count + 1);
setCount((prevCount) => prevCount + 1); // Functional update (preferred)

// Boolean state
const [isOpen, setIsOpen] = React.useState(false);
setIsOpen(!isOpen); // Toggle
setIsOpen((prev) => !prev); // Functional toggle

// String state
const [name, setName] = React.useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />;

// Array state
const [favorites, setFavorites] = React.useState([]);
setFavorites([...favorites, newItem]); // Add
setFavorites(favorites.filter((item) => item !== removeItem)); // Remove

// Object state
const [user, setUser] = React.useState({ name: '', age: 0 });
setUser({ ...user, name: 'John' }); // Update property

// Multiple state variables
const [count, setCount] = React.useState(0);
const [name, setName] = React.useState('');
const [isActive, setIsActive] = React.useState(false);
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- Counter that increments and decrements
- Favorite button that toggles and shows visual feedback
- Search that filters the hero list in real-time
- Favorite count updates when heroes are favorited

## ⏱️ Time

**~35-40 minutes**

This is the most important exercise of Day 2 - take your time!
