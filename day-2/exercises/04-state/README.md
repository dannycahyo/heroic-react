# Exercise 4: State - Managing Component Data

## 🚀 Quick Start

```bash
# From the day-2 directory
npm run dev:04
```

Open `http://localhost:3004` in your browser.

## 📝 What You'll Learn

- Use the `useState` hook
- Update state immutably
- Create controlled inputs
- Manage array state
- Combine multiple state variables

## 🎯 Your Tasks

Edit `exercises/04-state/src/App.jsx`:

### Exercise 1: Counter Component

- Create `count` state
- Add increment, decrement, and reset buttons

### Exercise 2: Search Functionality

- Create `searchTerm` state
- Make input controlled (value + onChange)
- Filter heroes based on searchTerm

### Exercise 3: Favorites

- Create `favorites` state (array of IDs)
- Add toggleFavorite function
- Update HeroCard to show favorite status
- Display favorites count

## 💡 Key Concepts

**Creating State:**

```jsx
const [count, setCount] = useState(0);
const [items, setItems] = useState([]);
```

**Updating State:**

```jsx
// Numbers
setCount(count + 1);

// Arrays - add item
setItems([...items, newItem]);

// Arrays - remove item
setItems(items.filter((item) => item.id !== id));
```

**Controlled Input:**

```jsx
<input
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

**Filtering:**

```jsx
const filtered = heroes.filter((hero) =>
  hero.name.toLowerCase().includes(searchTerm.toLowerCase()),
);
```

## ✅ Success Criteria

- [ ] Counter increments/decrements/resets
- [ ] Search input filters heroes
- [ ] Can toggle favorites
- [ ] Favorite count updates
- [ ] Button appearance changes when favorited
- [ ] All state updates work correctly

## 🎁 Bonus

- Show "no results" message when filtered list is empty
- Save favorites to localStorage
- Add "Clear All Favorites" button
- Add "Show Favorites Only" toggle

⏱️ **Time: ~45 minutes**
