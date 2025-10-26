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

## Curriculum

### Day 1: From DOM to React (2 hours)

#### 1. Basic JavaScript-rendered Hello World (30 min)

- Understanding the DOM (Document Object Model)
- Creating DOM elements with vanilla JavaScript
- Using `document.createElement()` and `appendChild()`
- Adding text content and attributes
- **Exercise:** Build a "Hello World" page using only JavaScript

#### 2. Intro to React with `React.createElement()` (30 min)

- Why React? The declarative approach
- Setting up React via CDN (keep it simple for learning)
- Understanding `React.createElement(type, props, children)`
- Creating elements programmatically
- Rendering with `ReactDOM.createRoot()` and `root.render()`
- **Exercise:** Recreate the Hello World using `React.createElement()`

#### 3. JSX - JavaScript XML (45 min)

- What is JSX and why use it?
- JSX syntax rules (className, camelCase, self-closing tags)
- Expressions in JSX with curly braces `{}`
- Setting up Babel for JSX transformation (via CDN)
- JSX vs `React.createElement()` - understanding the compilation
- **Exercise:** Convert createElement examples to JSX

#### 4. Creating Custom Components (15 min)

- Function components
- Component naming conventions (PascalCase)
- Composing components
- **Exercise:** Create a `Greeting` component

---

### Day 2: Components, Props & State (3 hours)

#### 1. Props - Passing Data to Components (45 min)

- What are props?
- Passing props to components
- Accessing props in function components
- Children prop
- Props are read-only (immutability)
- **Exercise:** Create a `HeroCard` component that accepts name, power, and image props

#### 2. Rendering Lists (30 min)

- Using `map()` to render arrays
- The `key` prop and why it matters
- Rendering dynamic lists from data
- **Exercise:** Render a list of heroes from an array

#### 3. Event Handling (30 min)

- Handling events in React (onClick, onChange, onSubmit)
- Event handler functions
- Passing arguments to event handlers
- **Exercise:** Add a "favorite" button to hero cards

#### 4. State with `useState` Hook (75 min)

- What is state?
- Introducing hooks and the rules of hooks
- `useState` syntax: `const [value, setValue] = useState(initialValue)`
- Updating state and re-rendering
- State vs props
- Multiple state variables
- **Exercise:**
  - Create a counter component
  - Add favorite functionality that toggles hero cards
  - Build a form with controlled inputs

---

### Day 3: Side Effects & Final Project (3 hours)

#### 1. Side Effects with `useEffect` Hook (60 min)

- What are side effects?
- `useEffect` syntax and the dependency array
- Effect cleanup (return function)
- Common use cases: data fetching, subscriptions, DOM updates
- Dependency array: `[]`, `[dep]`, and no array
- **Exercise:**
  - Create a component that fetches data from DummyJSON API
  - Display loading states

#### 2. Fetching Data from APIs (30 min)

- Using `fetch()` with `useEffect`
- Handling loading, success, and error states
- Working with the DummyJSON Products API
- Async/await in useEffect
- **Exercise:** Build a product list component that fetches from `https://dummyjson.com/products`

#### 3. Final Project: Product Showcase App (90 min)

Build a mini e-commerce product showcase with the following features:

**Core Features:**

- Display products from DummyJSON API
- Product grid/list view
- Product details (title, price, description, image, rating)
- Search/filter functionality
- Add to cart counter (using useState)
- Responsive design with basic CSS

**Components to Build:**

- `App` - Main application component
- `ProductList` - Fetches and displays products
- `ProductCard` - Individual product display
- `SearchBar` - Filter products
- `Cart` - Simple cart counter in header

**Stretch Goals (if time permits):**

- Category filtering
- Sort by price
- Product detail modal/page
- Loading skeleton

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
