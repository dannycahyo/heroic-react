# Exercise 2: Lists - Rendering Arrays

## 🚀 Quick Start

```bash
# From the day-2 directory
npm run dev:02
```

Open `http://localhost:3002` in your browser.

## 📝 What You'll Learn

- Render lists using `map()`
- Use the `key` prop correctly
- Filter arrays before rendering
- Spread props to components

## 🎯 Your Tasks

Edit `exercises/02-lists/src/App.jsx`:

1. **Create an array** of hero objects with:

   - `id` (unique identifier)
   - `name`, `power`, `image`, `realName`, `team`

2. **Use `map()`** to render a HeroCard for each hero

3. **Add the `key` prop** (use the hero's `id`)

4. **Display the total count** of heroes

## 💡 Key Concepts

**Creating an Array:**

```jsx
const heroes = [
  {
    id: 1,
    name: 'Iron Man',
    power: '...',
    // ...
  },
  // more heroes...
];
```

**Mapping Over Array:**

```jsx
{
  heroes.map((hero) => <HeroCard key={hero.id} {...hero} />);
}
```

**Spreading Props:**

```jsx
{...hero}
// Same as: name={hero.name} power={hero.power} etc.
```

## ✅ Success Criteria

- [ ] Array of at least 4 heroes created
- [ ] All heroes rendered using map()
- [ ] Each card has a unique key prop
- [ ] Total count displayed
- [ ] No console warnings about keys

## 🎁 Bonus

- Show different message when array is empty
- Filter heroes by team
- Show count of filtered results
- Sort heroes alphabetically

⏱️ **Time: ~45 minutes**
