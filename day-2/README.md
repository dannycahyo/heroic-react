# Day 2: Interactive React

Welcome to Day 2! Today we'll work with a real React development environment using Vite.

## 🚀 Getting Started

### First Time Setup

```bash
# Navigate to day-2 folder
cd day-2

# Install dependencies (only need to do this once)
npm install
```

### Running Exercises

Each exercise has its own dev server. Run one at a time:

```bash
# Exercise 1: Props
npm run dev:01

# Exercise 2: Lists
npm run dev:02

# Exercise 3: Events
npm run dev:03

# Exercise 4: State
npm run dev:04
```

### Running Solutions

To see the working solutions:

```bash
# Solution 1: Props
npm run solution:01

# Solution 2: Lists
npm run solution:02

# Solution 3: Events
npm run solution:03

# Solution 4: State
npm run solution:04
```

## 📁 Project Structure

```
day-2/
├── exercises/
│   ├── 01-props/
│   │   ├── src/
│   │   │   ├── App.jsx          # Main component
│   │   │   ├── main.jsx         # Entry point
│   │   │   └── index.css        # Styles
│   │   ├── index.html
│   │   └── vite.config.js
│   ├── 02-lists/
│   ├── 03-events/
│   └── 04-state/
├── solutions/
│   ├── 01-props/
│   ├── 02-lists/
│   ├── 03-events/
│   └── 04-state/
├── package.json
└── README.md
```

## 📚 Exercises

### Exercise 1: Props (45 min)

Learn to pass data between components using props.

**Topics:**

- Understanding props
- Destructuring props
- Default values
- Conditional rendering

**Files to edit:**

- `exercises/01-props/src/App.jsx`

### Exercise 2: Lists (45 min)

Render arrays of data dynamically.

**Topics:**

- Using map() to render lists
- The key prop
- Filtering arrays
- Spreading props

**Files to edit:**

- `exercises/02-lists/src/App.jsx`

### Exercise 3: Events (45 min)

Handle user interactions.

**Topics:**

- onClick, onChange, onMouseEnter, onMouseLeave
- Event handlers
- Event object
- Passing arguments

**Files to edit:**

- `exercises/03-events/src/App.jsx`

### Exercise 4: State (45 min)

Manage component state with useState.

**Topics:**

- useState hook
- State updates
- Controlled inputs
- Array state management

**Files to edit:**

- `exercises/04-state/src/App.jsx`

## 💡 Tips

1. **Dev Server**: The dev server automatically reloads when you save changes
2. **Console**: Open browser DevTools (F12) to see console.log() output
3. **Errors**: React error messages in the browser are very helpful - read them!
4. **Stuck?**: Check the solution files, but try the exercise first!

## 🎯 Learning Goals

By the end of Day 2, you should be able to:

- ✅ Pass data using props
- ✅ Render lists from arrays
- ✅ Handle user events
- ✅ Manage component state
- ✅ Build interactive React applications

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

**Ready?** Start with `npm install` then `npm run dev:01`! 🚀
