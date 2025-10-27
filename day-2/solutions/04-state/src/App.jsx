import { useState } from 'react';

// Counter component with state
function Counter() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '18px',
    backgroundColor: '#fff',
    color: '#667eea',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '20px',
      }}
    >
      <h2 style={{ color: 'white', margin: '0 0 15px 0' }}>
        Counter Exercise
      </h2>
      <p
        style={{
          color: 'white',
          fontSize: '32px',
          margin: '10px 0',
        }}
      >
        Count: {count}
      </p>

      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        ➕ Increment
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        ➖ Decrement
      </button>
      <button style={buttonStyle} onClick={() => setCount(0)}>
        🔄 Reset
      </button>
    </div>
  );
}

// Badge component
function Badge({ text, color = '#667eea' }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        backgroundColor: color,
        color: 'white',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: 'bold',
        marginTop: '8px',
      }}
    >
      {text}
    </span>
  );
}

// HeroCard component with favorite functionality
function HeroCard({
  id,
  name,
  power,
  image,
  realName,
  team,
  isFavorite,
  onToggleFavorite,
}) {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    margin: '5px',
    fontSize: '14px',
    backgroundColor: isFavorite ? '#ff6b6b' : '#fff',
    color: isFavorite ? '#fff' : '#667eea',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h2
        style={{
          color: 'white',
          fontSize: '24px',
          margin: '0 0 8px 0',
        }}
      >
        {name}
      </h2>
      {realName && (
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '12px',
            fontStyle: 'italic',
            margin: '0 0 8px 0',
          }}
        >
          aka {realName}
        </p>
      )}
      <p
        style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '14px',
          margin: '0 0 8px 0',
        }}
      >
        {power}
      </p>
      <Badge text={team} />

      <div style={{ marginTop: '15px' }}>
        <button
          style={buttonStyle}
          onClick={() => onToggleFavorite(id)}
        >
          {isFavorite ? '❤️ Favorited' : '🤍 Favorite'}
        </button>
      </div>
    </div>
  );
}

function App() {
  const heroesData = [
    {
      id: 1,
      name: 'Iron Man',
      power: 'Genius intellect, powered armor suit',
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg',
      realName: 'Tony Stark',
      team: 'Avengers',
    },
    {
      id: 2,
      name: 'Spider-Man',
      power: 'Wall-crawling, super strength, spider-sense',
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg',
      realName: 'Peter Parker',
      team: 'Avengers',
    },
    {
      id: 3,
      name: 'Wonder Woman',
      power: 'Super strength, speed, combat skills',
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg',
      realName: 'Diana Prince',
      team: 'Justice League',
    },
    {
      id: 4,
      name: 'Batman',
      power: 'Genius intellect, martial arts, detective skills',
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg',
      realName: 'Bruce Wayne',
      team: 'Justice League',
    },
  ];

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // State for favorites (array of hero IDs)
  const [favorites, setFavorites] = useState([]);

  // Filter heroes based on search term
  const filteredHeroes = heroesData.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Toggle favorite function
  const toggleFavorite = (heroId) => {
    if (favorites.includes(heroId)) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== heroId));
    } else {
      // Add to favorites
      setFavorites([...favorites, heroId]);
    }
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    backdropFilter: 'blur(10px)',
    margin: '0 auto 20px auto',
    display: 'block',
  };

  return (
    <div>
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '48px',
          marginBottom: '20px',
        }}
      >
        Heroic Gallery 🦸
      </h1>

      <p
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '18px',
          marginBottom: '10px',
        }}
      >
        Favorites: {favorites.length}
      </p>

      {/* Counter Component */}
      <Counter />

      {/* Search Input - Controlled Component */}
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />

      {/* Show filtered count */}
      {searchTerm && (
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            fontSize: '14px',
            marginBottom: '20px',
          }}
        >
          Found {filteredHeroes.length} hero(es) matching "
          {searchTerm}"
        </p>
      )}

      {/* Heroes Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {filteredHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            {...hero}
            isFavorite={favorites.includes(hero.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredHeroes.length === 0 && (
        <p
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '20px',
            marginTop: '40px',
          }}
        >
          No heroes found. Try a different search term!
        </p>
      )}
    </div>
  );
}

export default App;
