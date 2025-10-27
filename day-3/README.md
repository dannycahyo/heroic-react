# Day 3: Effects & Final Project

Welcome to Day 3! Today we'll learn about side effects, data fetching, and build a complete React application.

## 🚀 Getting Started

### First Time Setup

```bash
# Navigate to day-3 folder
cd day-3

# Install dependencies (only need to do this once)
npm install
```

### Running Exercises

Each exercise has its own dev server. Run one at a time:

```bash
# Exercise 1: useEffect Hook
npm run dev:01

# Exercise 2: Data Fetching
npm run dev:02

# Exercise 3: Final Project
npm run dev:03
```

### Running Solutions

To see the working solutions:

```bash
# Solution 1: useEffect Hook
npm run solution:01

# Solution 2: Data Fetching
npm run solution:02

# Solution 3: Final Project
npm run solution:03
```

## 📁 Project Structure

```
day-3/
├── exercises/
│   ├── 01-useEffect/
│   │   ├── src/
│   │   │   ├── App.jsx          # Main component
│   │   │   ├── main.jsx         # Entry point
│   │   │   └── index.css        # Styles
│   │   ├── index.html
│   │   ├── vite.config.js
│   │   └── README.md
│   ├── 02-data-fetching/
│   └── 03-final-project/
├── solutions/
│   ├── 01-useEffect/
│   ├── 02-data-fetching/
│   └── 03-final-project/
├── package.json
└── README.md
```

## 📚 Exercises

### Exercise 1: useEffect Hook (30 min)

Learn to handle side effects in React components.

**Topics:**

- Understanding side effects
- useEffect hook syntax
- Dependency array
- Cleanup functions
- Document title updates
- Timers and intervals

**Files to edit:**

- `exercises/01-useEffect/src/App.jsx`

**Key Concepts:**

```jsx
// Run once on mount
useEffect(() => {
  console.log('Component mounted');
}, []);

// Run when dependency changes
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// Cleanup on unmount
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(timer);
}, []);
```

### Exercise 2: Data Fetching (20 min)

Fetch and display real data from an external API.

**Topics:**

- Fetching data with useEffect
- async/await in React
- Loading states
- Error handling
- Working with the DummyJSON API
- Displaying fetched data

**Files to edit:**

- `exercises/02-data-fetching/src/App.jsx`

**API Endpoint:**

- Products: `https://dummyjson.com/products?limit=12`

**Key Pattern:**

```jsx
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
```

### Exercise 3: Final Project (90 min)

Build a complete product showcase application combining everything learned!

**Topics:**

- Component composition
- State management
- Data fetching
- Search functionality
- Cart management
- Loading/error states
- Responsive design

**Files to edit:**

- `exercises/03-final-project/src/App.jsx`

**Core Features:**

1. Fetch products from DummyJSON API
2. Display products in a responsive grid
3. Search functionality (filter by title)
4. Add/remove items from cart
5. Cart counter in header
6. Loading spinner
7. Error handling

**Bonus Features:**

- Category filtering
- Sort by price/rating
- Product details modal
- Price range filter
- Clear cart button

## 💡 Tips

1. **Dev Server**: The dev server automatically reloads when you save changes
2. **Console**: Open browser DevTools (F12) to see console.log() output and network requests
3. **Errors**: React error messages in the browser are very helpful - read them!
4. **API Testing**: Test API endpoints in your browser or Postman first
5. **Stuck?**: Check the solution files, but try the exercise first!
6. **State Management**: Keep your state organized - use multiple useState hooks for clarity

## 🎯 Learning Goals

By the end of Day 3, you should be able to:

- ✅ Use useEffect for side effects
- ✅ Fetch data from external APIs
- ✅ Handle loading and error states
- ✅ Work with async/await in React
- ✅ Build a complete React application
- ✅ Compose multiple components together
- ✅ Manage complex application state

## 🔧 Troubleshooting

**Port already in use?**

```bash
# Kill the process using the port
lsof -ti:3005 | xargs kill -9
```

**Dependencies not installing?**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Changes not showing?**

- Make sure you saved the file
- Check the terminal for errors
- Try refreshing the browser (Cmd+R / Ctrl+R)

## 🔗 Resources

- [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- [DummyJSON API](https://dummyjson.com)
- [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async/Await Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## 🎓 What's Next?

After completing Day 3, you'll have:

- Built a real React application from scratch
- Learned the core React concepts
- Understood component composition
- Mastered state and effects
- Worked with external APIs

**Congratulations on completing the React Workshop!** 🎉

---

**Ready?** Start with `npm install` then `npm run dev:01`! 🚀
