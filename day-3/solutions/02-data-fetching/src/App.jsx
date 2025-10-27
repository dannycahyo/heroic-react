import React from 'react';

function ProductCard({ product }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 12,
        padding: 20,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow =
          '0 12px 48px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
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
      <span
        style={{
          display: 'inline-block',
          padding: '4px 8px',
          backgroundColor: '#667eea',
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 'bold',
          marginBottom: 8,
        }}
      >
        {product.category}
      </span>
      <h3 style={{ margin: '0 0 10px', fontSize: 18 }}>
        {product.title}
      </h3>
      <p
        style={{
          opacity: 0.7,
          fontSize: 13,
          margin: '0 0 15px',
          lineHeight: 1.5,
        }}
      >
        {product.description.substring(0, 80)}...
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 'bold' }}>
          ${product.price}
        </span>
        <span style={{ color: '#ffd700', fontSize: 14 }}>
          ⭐ {product.rating.toFixed(1)}
        </span>
      </div>
      {product.stock < 50 && (
        <p
          style={{
            color: '#ff6b6b',
            fontSize: 12,
            margin: '10px 0 0',
          }}
        >
          Only {product.stock} left!
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://dummyjson.com/products?limit=20',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            border: '4px solid rgba(255,255,255,0.2)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            width: 60,
            height: 60,
            animation: 'spin 1s linear infinite',
            marginBottom: 20,
          }}
        ></div>
        <p style={{ fontSize: 20 }}>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: 20,
        }}
      >
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>❌</h1>
        <h2 style={{ fontSize: 32, marginBottom: 10 }}>
          Oops! Something went wrong
        </h2>
        <p style={{ fontSize: 18, opacity: 0.8 }}>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: 20,
            padding: '12px 24px',
            fontSize: 16,
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 48,
          marginBottom: 20,
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
        }}
      >
        🛍️ Product Showcase
      </h1>

      <p
        style={{
          textAlign: 'center',
          fontSize: 18,
          marginBottom: 30,
          opacity: 0.9,
        }}
      >
        Showing {filteredProducts.length} of {products.length}{' '}
        products
      </p>

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          maxWidth: 500,
          padding: '12px 20px',
          fontSize: 16,
          borderRadius: 8,
          border: '2px solid rgba(255,255,255,0.2)',
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: 'white',
          backdropFilter: 'blur(10px)',
          margin: '0 auto 30px',
          display: 'block',
        }}
      />

      {filteredProducts.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: 60,
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 12,
            backdropFilter: 'blur(10px)',
          }}
        >
          <p style={{ fontSize: 24, margin: 0 }}>
            😢 No products found
          </p>
          <p
            style={{ opacity: 0.7, fontSize: 16, margin: '10px 0 0' }}
          >
            Try a different search term
          </p>
        </div>
      )}
    </div>
  );
}
