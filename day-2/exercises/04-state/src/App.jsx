import { useState } from 'react';

// EXERCISE 1: Simple Counter Component
function Counter() {
  // TODO: Create state for count
  // Hint: const [count, setCount] = useState(0)

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
        {/* TODO: Display count here */}
        Count: 0
      </p>

      {/* TODO: Add three buttons */}
      {/* 1. Increment button that increases count by 1 */}
      {/* 2. Decrement button that decreases count by 1 */}
      {/* 3. Reset button that sets count to 0 */}
      {/* Hint: onClick={() => setCount(count + 1)} */}
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

// HeroCard component
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
        {/* TODO: Wire up the favorite button */}
        {/* Hint: Change background color based on isFavorite */}
        {/* Hint: Change text based on isFavorite */}
        {/* Hint: Call onToggleFavorite(id) when clicked */}
        <button
          style={{
            padding: '8px 16px',
            margin: '5px',
            fontSize: '14px',
            backgroundColor: '#fff',
            color: '#667eea',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Favorite
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

  // TODO: EXERCISE 2 - Create searchTerm state
  // Hint: const [searchTerm, setSearchTerm] = useState('')

  // TODO: EXERCISE 3 - Create favorites state (array of IDs)
  // Hint: const [favorites, setFavorites] = useState([])

  // TODO: Filter heroes based on searchTerm
  // Hint: Use heroesData.filter() and check if name includes searchTerm
  // Hint: Use .toLowerCase() for case-insensitive search
  const filteredHeroes = heroesData; // Replace with filtered array

  // TODO: Create toggleFavorite function
  // This function should:
  // 1. Check if the heroId is in favorites array
  // 2. If yes, remove it using filter
  // 3. If no, add it using spread operator
  // Hint: favorites.includes(heroId)
  // Hint: setFavorites([...favorites, heroId])

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

      {/* TODO: Show favorites count */}
      {/* Hint: favorites.length */}

      {/* EXERCISE 1: Counter Component */}
      <Counter />

      {/* TODO: EXERCISE 2 - Add search input */}
      {/* Hint: Controlled input with value={searchTerm} */}
      {/* Hint: onChange={(e) => setSearchTerm(e.target.value)} */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {/* TODO: Map over filteredHeroes */}
        {/* TODO: Pass isFavorite and onToggleFavorite props */}
        {filteredHeroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
}

export default App;
