# Exercise 2: Rendering Lists

## 📝 Learning Objectives

- Learn to render arrays of data dynamically
- Understand the importance of the `key` prop
- Use the `map()` function to transform data into components
- Work with arrays of objects
- Handle empty arrays gracefully

## 📚 Background

In real applications, you often need to display lists of data (products, users, posts, etc.). React provides a clean way to do this using JavaScript's `map()` function.

**The map() function:**

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
// doubled is [2, 4, 6]
```

**With React:**

```jsx
const numbers = [1, 2, 3];
const listItems = numbers.map((num) => <li key={num}>{num}</li>);
```

**The key prop:**

- React needs `key` to identify which items have changed, are added, or removed
- Keys should be unique among siblings
- Use stable IDs from your data (not array index if possible)
- Keys help React optimize rendering performance

## 🎯 Exercise

Display a list of heroes using the map function and the HeroCard component from the previous exercise.

### Requirements:

1. Create an array of hero objects with id, name, power, image, etc.
2. Use `map()` to render HeroCard components from the array
3. Add a unique `key` prop to each HeroCard
4. Handle an empty heroes array (show a message)
5. Filter the list based on a criteria (e.g., show only Avengers)

### Bonus Challenges:

- Create a separate heroes data file and import it
- Add a "No heroes found" message for empty lists
- Create a component that accepts a heroes array as a prop
- Render different lists side by side (Avengers vs Justice League)
- Add a count of total heroes

## 💡 Hints

```jsx
// Array of data
const heroes = [
  { id: 1, name: 'Iron Man', power: 'Technology' },
  { id: 2, name: 'Spider-Man', power: 'Spider abilities' }
];

// Render with map
{heroes.map(hero => (
  <HeroCard
    key={hero.id}
    name={hero.name}
    power={hero.power}
  />
))}

// Filter before mapping
{heroes.filter(hero => hero.team === 'Avengers').map(hero => (
  <HeroCard key={hero.id} {...hero} />
))}

// Spread operator to pass all properties
<HeroCard key={hero.id} {...hero} />
// is the same as
<HeroCard key={hero.id} name={hero.name} power={hero.power} ... />

// Handle empty array
{heroes.length === 0 ? (
  <p>No heroes found</p>
) : (
  heroes.map(hero => ...)
)}
```

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- Multiple hero cards rendered from an array
- Each card displaying correct data
- No console warnings about missing keys
- Proper handling of empty/filtered lists

## ⏱️ Time

**~15-20 minutes**
