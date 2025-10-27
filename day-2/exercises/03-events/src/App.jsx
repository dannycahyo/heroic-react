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
  name,
  power,
  image,
  realName,
  team = 'Independent',
}) {
  // TODO: Create event handler functions here
  // Hint: const handleFavorite = () => { /* code here */ }
  // Hint: You can use alert() to show a message
  // Hint: You can use console.log() to log to the console

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
    backgroundColor: '#fff',
    color: '#667eea',
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
        {/* TODO: Add a Favorite button with onClick */}
        {/* Hint: <button onClick={yourFunction}>Text</button> */}

        {/* TODO: Add a View Details button with onClick */}

        {/* BONUS: Add hover effect to the card */}
        {/* Hint: Use onMouseEnter and onMouseLeave on the card div */}
        {/* Hint: You can modify the element's style directly with e.target.style */}
      </div>
    </div>
  );
}

function App() {
  const heroes = [
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
  ];

  // TODO: Create a handleSearch function
  // Hint: It receives an event parameter
  // Hint: Get the input value with event.target.value
  // Hint: For now, just console.log the value

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

      {/* TODO: Add a search input with onChange handler */}
      {/* Hint: <input type="text" onChange={yourFunction} ... /> */}
      {/* Hint: Add placeholder="Search heroes..." */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '20px',
        }}
      >
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
}

export default App;
