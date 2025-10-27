# Exercise 1: Props - Passing Data to Components

## 🚀 Quick Start

```bash
# From the day-2 directory
npm run dev:01
```

Open `http://localhost:3001` in your browser.

## 📝 What You'll Learn

- Pass data to components using props
- Destructure props for cleaner code
- Handle optional props with default values
- Conditional rendering based on props

## 🎯 Your Tasks

Edit `exercises/01-props/src/App.jsx`:

1. **Create a `HeroCard` component** that accepts:

   - `name` - Hero's name
   - `power` - Hero's superpower
   - `image` - Image URL
   - `realName` - Real identity (optional)
   - `team` - Team name (optional)

2. **Add styling** to make the card look good

3. **Use conditional rendering** to show realName only if provided

4. **Create 3+ hero cards** with different data

## 💡 Key Concepts

**Passing Props:**

```jsx
<HeroCard name="Iron Man" power="Powered armor" image="url..." />
```

**Receiving Props (with destructuring):**

```jsx
function HeroCard({ name, power, image, realName }) {
  return <div>{name}</div>;
}
```

**Conditional Rendering:**

```jsx
{
  realName && <p>aka {realName}</p>;
}
```

## ✅ Success Criteria

- [ ] HeroCard component created
- [ ] Props are destructured
- [ ] At least 3 hero cards rendered
- [ ] Optional realName displays conditionally
- [ ] Cards are styled nicely

## 🎁 Bonus

- Create a `Badge` component for the team
- Add default prop values
- Add more optional props (rating, description, etc.)

⏱️ **Time: ~45 minutes**
