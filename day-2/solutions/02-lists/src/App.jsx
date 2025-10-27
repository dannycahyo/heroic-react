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
    </div>
  );
}

function App() {
  // Array of heroes data
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
    {
      id: 4,
      name: 'Batman',
      power: 'Genius intellect, martial arts, detective skills',
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg',
      realName: 'Bruce Wayne',
      team: 'Justice League',
    },
    {
      id: 5,
      name: 'Black Widow',
      power: 'Master spy, martial arts expert',
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/107-black-widow.jpg',
      realName: 'Natasha Romanoff',
      team: 'Avengers',
    },
    {
      id: 6,
      name: 'Captain America',
      power: 'Super strength, enhanced agility, leadership',
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/149-captain-america.jpg',
      realName: 'Steve Rogers',
      team: 'Avengers',
    },
  ];

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
        Heroic Gallery
      </h1>

      {/* Show total count */}
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '18px',
          marginBottom: '30px',
        }}
      >
        Total Heroes: {heroes.length}
      </p>

      {/* Render list of heroes using map() */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>

      {/* Example: Filtered list (Avengers only) */}
      <h2
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '36px',
          marginTop: '60px',
          marginBottom: '20px',
        }}
      >
        Avengers Team
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {heroes
          .filter((hero) => hero.team === 'Avengers')
          .map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
      </div>
    </div>
  );
}

export default App;
