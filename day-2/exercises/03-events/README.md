# Exercise 3: Events - Handling User Interactions

## 🚀 Quick Start

```bash
# From the day-2 directory
npm run dev:03
```

Open `http://localhost:3003` in your browser.

## 📝 What You'll Learn

- Handle click events with `onClick`
- Handle input changes with `onChange`
- Use mouse events (`onMouseEnter`, `onMouseLeave`)
- Access event objects
- Create event handler functions

## 🎯 Your Tasks

Edit `exercises/03-events/src/App.jsx`:

1. **In HeroCard component:**

   - Add a "Favorite" button with `onClick`
   - Add a "View Details" button
   - Add hover effects to the card

2. **In App component:**
   - Add a search input with `onChange`
   - Log search values to console

## 💡 Key Concepts

**Click Events:**

```jsx
const handleClick = () => {
  alert('Clicked!');
};

<button onClick={handleClick}>Click Me</button>;
```

**Input Events:**

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};

<input onChange={handleChange} />;
```

**Mouse Events:**

```jsx
<div
  onMouseEnter={() => console.log('entered')}
  onMouseLeave={() => console.log('left')}
>
  Hover me
</div>
```

## ✅ Success Criteria

- [ ] Favorite button shows alert with hero name
- [ ] View Details button logs hero data
- [ ] Search input logs typed values
- [ ] Cards scale up on hover
- [ ] All events working properly

## 🎁 Bonus

- Add button hover effects
- Add `onFocus` and `onBlur` to search input
- Add double-click event
- Add keyboard events

⏱️ **Time: ~45 minutes**
