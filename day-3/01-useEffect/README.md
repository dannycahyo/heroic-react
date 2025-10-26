# Exercise 1: Side Effects with `useEffect` Hook

## 📝 Learning Objectives

- Understand what side effects are in React
- Learn the `useEffect` hook syntax
- Work with the dependency array
- Implement cleanup functions
- Fetch data from an API
- Handle loading and error states

## 📚 Background

**Side effects** are operations that affect things outside the component: fetching data, subscriptions, timers, manual DOM manipulation, etc.

`useEffect` runs after the component renders and can:

- Fetch data from APIs
- Set up subscriptions
- Update the document title
- Set timers/intervals
- Interact with browser APIs

**useEffect Syntax:**

```jsx
React.useEffect(() => {
  // Effect code here

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

**Dependency Array:**

- `[]` - Run once on mount
- `[dep1, dep2]` - Run when dependencies change
- No array - Run on every render (usually avoid this)

**Common Patterns:**

```jsx
// Run once on mount
React.useEffect(() => {
  console.log('Component mounted');
}, []);

// Run when count changes
React.useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// Cleanup on unmount
React.useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(timer);
}, []);
```

## 🎯 Exercise

Practice using `useEffect` with various use cases before fetching real data.

### Requirements:

1. Update document title when component mounts
2. Create a timer that updates every second
3. Clean up the timer on unmount
4. Log when dependencies change
5. Fetch hero data from a mock API (simulated)

### Bonus Challenges:

- Create a clock that shows current time
- Add a cleanup function
- Track component lifecycle events
- Implement a delayed search (debounce)
- Handle multiple effects in one component

## 💡 Hints

```jsx
// Update document title
React.useEffect(() => {
  document.title = 'New Title';
}, []);

// Timer with cleanup
React.useEffect(() => {
  const intervalId = setInterval(() => {
    console.log('tick');
  }, 1000);

  // Cleanup function
  return () => clearInterval(intervalId);
}, []);

// Fetch data (we'll do real API next)
React.useEffect(() => {
  // Simulate API call
  setTimeout(() => {
    setData(mockData);
    setLoading(false);
  }, 1000);
}, []);

// Watch dependencies
React.useEffect(() => {
  console.log('Value changed:', value);
}, [value]);
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- Document title updated
- Timer counting up
- Loading states working
- Console logs showing effect runs
- Cleanup happening when component unmounts

## ⏱️ Time

**~25-30 minutes**
