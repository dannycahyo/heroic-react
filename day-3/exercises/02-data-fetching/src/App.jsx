import React from 'react';

// Starter: data fetching exercise
// This file provides a ProductCard component and an empty App.
// Your task: fetch products from https://dummyjson.com/products?limit=12 and display them.

function ProductCard({ product }) {
  return (
    <div className="card" style={{ textAlign: 'left' }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          borderRadius: 8,
          marginBottom: 15,
        }}
      />
      <h3>{product.title}</h3>
      <p style={{ opacity: 0.8, fontSize: 14 }}>
        {product.description.substring(0, 80)}...
      </p>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span style={{ fontSize: 24, fontWeight: 'bold' }}>
          ${product.price}
        </span>
        <span style={{ color: '#ffd700' }}>⭐ {product.rating}</span>
      </div>
    </div>
  );
}

export default function App() {
  // TODO: Create state for products, loading, and error.
  // TODO: Use useEffect to fetch data from 'https://dummyjson.com/products?limit=12'
  // TODO: Handle loading state and error state.
  // TODO: Display the products in a grid below.

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center', fontSize: 48 }}>
        Product Showcase
      </h1>

      {/* TODO: Show loading spinner */}
      {/* TODO: Show error if any */}
      {/* TODO: Display products in a grid using ProductCard */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}
      >
        {/* Render product cards here */}
      </div>
    </div>
  );
}
