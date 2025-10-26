# Exercise 3: Final Project - Product Showcase App

## 📝 Project Overview

Build a complete mini e-commerce product showcase application that brings together everything you've learned!

## 🎯 Core Features (Must Have)

1. **Product Display**

   - Fetch products from DummyJSON API
   - Display in a responsive grid
   - Show: image, title, price, description, rating

2. **Search Functionality**

   - Real-time search filtering
   - Search by product title

3. **Cart Counter**

   - Track number of items in cart
   - Add/remove products from cart
   - Display cart count in header

4. **Loading & Error States**

   - Show loading spinner while fetching
   - Display error messages if fetch fails
   - Handle empty states gracefully

5. **Responsive Design**
   - Works on mobile and desktop
   - Clean, modern UI

## 🌟 Bonus Features (If Time Permits)

- Category filtering
- Sort by price (low to high, high to low)
- Product detail modal/view
- Favorites/wishlist functionality
- Price range filter
- Rating filter
- Pagination or load more
- Loading skeleton
- Add to cart animations

## 🏗️ Component Structure

```
App
├── Header (cart count, logo)
├── SearchBar (search input)
├── Filters (category, price sort)
├── ProductList
│   └── ProductCard (individual product)
└── Cart (sidebar or modal - bonus)
```

## 📦 Required Components

### App Component

- Main application logic
- Fetch products
- Manage global state (products, cart, search, filters)

### ProductCard Component

- Display single product
- Add to cart button
- Show product details

### SearchBar Component

- Controlled input
- Updates search state

## 🔧 State Management

You'll need state for:

- `products` - array of products from API
- `loading` - boolean for loading state
- `error` - string for error messages
- `searchTerm` - string for search input
- `cart` - array of product IDs in cart
- `selectedCategory` - string for filtering (bonus)

## 🎨 Styling Guidelines

- Use inline styles (or create a `<style>` tag)
- Gradient background (already provided in previous exercises)
- Glass-morphism effect for cards
- Smooth transitions and hover effects
- Responsive grid layout

## 📡 API Reference

**Base URL:** `https://dummyjson.com`

**Endpoints:**

```javascript
// Get all products (limit to 20 for performance)
GET /products?limit=20

// Search products
GET /products/search?q=phone

// Get categories
GET /products/categories

// Get products by category
GET /products/category/smartphones
```

**Product Object Structure:**

```javascript
{
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile...",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://...",
  images: ["https://..."]
}
```

## ✅ Acceptance Criteria

- [ ] Products load from API on mount
- [ ] Loading state displays while fetching
- [ ] Products display in grid layout
- [ ] Search filters products in real-time
- [ ] Can add products to cart
- [ ] Cart count updates correctly
- [ ] Responsive on mobile and desktop
- [ ] No console errors
- [ ] Clean, readable code

## 💡 Implementation Tips

1. **Start Simple**: Get products displaying first
2. **Add State Gradually**: One feature at a time
3. **Test Frequently**: Check after each feature
4. **Use Console**: Debug with console.log
5. **Reuse Components**: From previous exercises
6. **Keep It Clean**: Format and comment your code

## ⏱️ Time Allocation

- **Planning**: 5 minutes
- **Basic Setup**: 10 minutes
- **Core Features**: 45 minutes
- **Styling**: 15 minutes
- **Bonus Features**: 15 minutes
- **Total**: 90 minutes

## 🚀 Getting Started

1. Review the provided starter code
2. Read through the requirements
3. Plan your component structure
4. Start with fetching and displaying products
5. Add features incrementally
6. Test and refine

## 🎓 Learning Outcomes

By completing this project, you will:

- ✅ Fetch and display real API data
- ✅ Manage complex application state
- ✅ Compose multiple components
- ✅ Handle user interactions
- ✅ Create a responsive UI
- ✅ Build a complete React application!

**Good luck! 🚀**
