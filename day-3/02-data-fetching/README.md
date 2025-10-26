# Exercise 2: Fetching Data from APIs

## 📝 Learning Objectives

- Fetch real data from an external API
- Handle loading, success, and error states
- Work with the DummyJSON Products API
- Use async/await with useEffect
- Display fetched data in components

## 📚 Background

Fetching data is one of the most common side effects in React applications. The pattern typically involves:

1. Set loading state to true
2. Make the API request
3. Handle the response (success or error)
4. Update state with the data
5. Set loading to false

**API we'll use:** [DummyJSON Products API](https://dummyjson.com/products)

**Fetch Pattern:**

```jsx
React.useEffect(() => {
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

## 🎯 Exercise

Fetch and display products from the DummyJSON API.

### Requirements:

1. Fetch products from `https://dummyjson.com/products`
2. Display loading state while fetching
3. Handle and display errors
4. Show products in a grid
5. Display product information (title, price, image, rating)

### Bonus Challenges:

- Add search functionality
- Implement pagination
- Add category filtering
- Show product details on click
- Add a refresh button

## 💡 API Endpoints

```
Get all products: https://dummyjson.com/products
Get single product: https://dummyjson.com/products/1
Search products: https://dummyjson.com/products/search?q=phone
Limit results: https://dummyjson.com/products?limit=10
```

## ⏱️ Time

**~15-20 minutes**
