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

// HeroCard component (from previous exercise)
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
  // TODO: Create an array of hero objects
  // Each hero should have: id, name, power, image, realName, team
  // Hint: Create at least 4 hero objects
  const heroes = [
    // Add your hero objects here
    // Example structure:
    // {
    //   id: 1,
    //   name: "Iron Man",
    //   power: "Genius intellect, powered armor suit",
    //   image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg",
    //   realName: "Tony Stark",
    //   team: "Avengers"
    // },
  ];

  return (
    <div>
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '48px',
          marginBottom: '40px',
        }}
      >
        Heroic Gallery
      </h1>

      {/* TODO: Use map() to render a HeroCard for each hero */}
      {/* Hint: heroes.map(hero => <HeroCard ... />) */}
      {/* IMPORTANT: Don't forget the 'key' prop! */}
      {/* Hint: You can spread all hero properties with {...hero} */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Your map() code goes here */}
      </div>

      {/* BONUS TODO: Show total count of heroes */}
      {/* Hint: Use heroes.length */}

      {/* BONUS TODO: Add a message when the array is empty */}
      {/* Hint: Use conditional rendering with && */}

      {/* BONUS TODO: Filter heroes by team before mapping */}
      {/* Hint: heroes.filter(hero => hero.team === 'Avengers').map(...) */}
    </div>
  );
}

export default App;
