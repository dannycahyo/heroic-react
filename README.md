# Heroic React

A three day workshop to learn the fundamentals of React by building a simple Heroic application.

## Workshop Overview

**Total Duration:** 8 hours (Day 1: 2h, Day 2: 3h, Day 3: 3h)

**Goal:** Build a strong foundation in React fundamentals and create a mini web app that integrates with the [DummyJSON Products API](https://dummyjson.com/docs/products).

**Target Audience:** Beginners to React who have basic JavaScript knowledge.

## Prerequisites

- Basic HTML/CSS knowledge
- JavaScript fundamentals (variables, functions, arrays, objects)
- Understanding of ES6+ features (arrow functions, destructuring, template literals)

## Tools & Setup

- Modern web browser (Chrome/Firefox/Edge)
- Code editor (VS Code recommended)
- Live Server extension or similar local development server

## 📚 Resources

Before starting, check out these helpful guides:

- **[Setup Guide](./resources/setup-guide.md)** - Get your environment ready
- **[React Cheat Sheet](./resources/react-cheatsheet.md)** - Quick reference for React concepts
- **[Heroes Data](./resources/heroes-data.js)** - Sample data for exercises

## 🗂️ Workshop Structure

Each exercise folder contains:

- `README.md` - Instructions and learning objectives
- `exercise.html` - Starter code with TODOs
- `solution.html` - Complete working solution

## Curriculum

### Day 1: From DOM to React (2 hours)

**[📁 Day 1 Exercises](./day-1/)**

#### 1. Basic JavaScript-rendered Hello World (30 min)

**[📂 Exercise Folder](./day-1/01-dom-hello-world/)**

- Understanding the DOM (Document Object Model)
- Creating DOM elements with vanilla JavaScript
- Using `document.createElement()` and `appendChild()`
- Adding text content and attributes
- **Exercise:** Build a "Hello World" page using only JavaScript

#### 2. Intro to React with `React.createElement()` (30 min)

**[📂 Exercise Folder](./day-1/02-react-createElement/)**

- Why React? The declarative approach
- Setting up React via CDN (keep it simple for learning)
- Understanding `React.createElement(type, props, children)`
- Creating elements programmatically
- Rendering with `ReactDOM.createRoot()` and `root.render()`
- **Exercise:** Recreate the Hello World using `React.createElement()`

#### 3. JSX - JavaScript XML (45 min)

**[📂 Exercise Folder](./day-1/03-jsx/)**

- What is JSX and why use it?
- JSX syntax rules (className, camelCase, self-closing tags)
- Expressions in JSX with curly braces `{}`
- Setting up Babel for JSX transformation (via CDN)
- JSX vs `React.createElement()` - understanding the compilation
- **Exercise:** Convert createElement examples to JSX

#### 4. Creating Custom Components (15 min)

**[📂 Exercise Folder](./day-1/04-custom-components/)**

- Function components
- Component naming conventions (PascalCase)
- Composing components
- **Exercise:** Create a `Greeting` component

---

### Day 2: Interactive React (3 hours)

**[📁 Day 2 Exercises](./day-2/)**

> **Note:** Day 2 uses a modern React setup with Vite instead of HTML files. See [Day 2 README](./day-2/README.md) for setup instructions.

**Setup:**

```bash
cd day-2
npm install
```

#### 1. Props - Passing Data to Components (45 min)

**[📂 Exercise Folder](./day-2/exercises/01-props/)** | `npm run dev:01`

- Understanding props (properties)
- Passing data from parent to child
- Destructuring props for cleaner code
- Default props
- **Exercise:** Create a `HeroCard` component that displays hero information

#### 2. Rendering Lists (45 min)

**[📂 Exercise Folder](./day-2/exercises/02-lists/)** | `npm run dev:02`

- Using `map()` to render arrays
- The importance of `key` prop
- Filtering and transforming data
- Working with arrays in React
- **Exercise:** Display a list of heroes using the `HeroCard` component

#### 3. Handling Events (45 min)

**[📂 Exercise Folder](./day-2/exercises/03-events/)** | `npm run dev:03`

- Event handling in React (onClick, onChange, etc.)
- Synthetic events
- Event handler functions
- Passing arguments to event handlers
- **Exercise:** Add click handlers to toggle hero details

#### 4. State with `useState` (45 min)

**[📂 Exercise Folder](./day-2/exercises/04-state/)** | `npm run dev:04`

- What is state?
- The `useState` hook
- State vs Props
- Updating state immutably
- Managing multiple state variables
- **Exercise:** Add favorite functionality - users can mark heroes as favorites
- **Exercise:** Create a `HeroCard` component that displays hero information

#### 2. Rendering Lists (45 min)

**[📂 Exercise Folder](./day-2/02-lists/)**

- Using `map()` to render arrays
- The importance of `key` prop
- Filtering and transforming data
- Working with arrays in React
- **Exercise:** Display a list of heroes using the `HeroCard` component

#### 3. Handling Events (45 min)

**[📂 Exercise Folder](./day-2/03-events/)**

- Event handling in React (onClick, onChange, etc.)
- Synthetic events
- Event handler functions
- Passing arguments to event handlers
- **Exercise:** Add click handlers to toggle hero details

#### 4. State with `useState` (45 min)

**[📂 Exercise Folder](./day-2/04-state/)**

- What is state?
- The `useState` hook
- State vs Props
- Updating state immutably
- Managing multiple state variables
- **Exercise:** Add favorite functionality - users can mark heroes as favorites

---

### Day 3: Side Effects and Real-World App (3 hours)

**[📁 Day 3 Exercises](./day-3/)**

#### 1. Side Effects with `useEffect` (1 hour)

**[📂 Exercise Folder](./day-3/01-useEffect/)**

- What are side effects?
- The `useEffect` hook
- Dependency arrays
- Cleanup functions
- Common use cases (timers, subscriptions, etc.)
- **Exercise:** Create a timer and update document title based on state

#### 2. Data Fetching (1 hour)

**[📂 Exercise Folder](./day-3/02-data-fetching/)**

- Fetching data with `fetch()`
- Async/await in React
- Loading states
- Error handling
- **Exercise:** Fetch products from DummyJSON API

#### 3. Final Project - Product Showcase (1 hour)

**[📂 Exercise Folder](./day-3/03-final-project/)**

Build a complete mini web app that combines everything learned:

- Component composition (Header, ProductCard, SearchBar)
- State management (products, cart, search, filters)
- Event handling (add to cart, search, filter)
- Side effects (data fetching with useEffect)
- List rendering (products grid)
- API integration (DummyJSON Products API)

**Goal:** Students will have a functional product showcase with shopping cart, search, and filtering capabilities!

---

## Learning Outcomes

By the end of this workshop, students will be able to:

✅ Understand how the DOM works and how React improves upon vanilla JavaScript  
✅ Use JSX to write declarative UI code  
✅ Create and compose React components  
✅ Pass data between components using props  
✅ Manage component state with `useState`  
✅ Handle user interactions and events  
✅ Fetch data from APIs using `useEffect`  
✅ Build a complete React application with external API integration

## What's Next?

After mastering these fundamentals, students can explore:

- Advanced hooks (`useReducer`, `useContext`, `useCallback`, `useMemo`)
- React Router for navigation
- State management libraries (Redux, Zustand)
- Styling solutions (CSS Modules, Styled Components, Tailwind)
- Build tools and modern development setup (Vite, Create React App)
- Performance optimization techniques
- Testing React applications
