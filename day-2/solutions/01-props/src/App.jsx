// Badge component - displays team or category badges
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

// HeroCard component - displays hero information
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        <HeroCard
          name="Iron Man"
          realName="Tony Stark"
          power="Genius intellect, powered armor suit"
          image="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg"
          team="Avengers"
        />
        <HeroCard
          name="Spider-Man"
          realName="Peter Parker"
          power="Wall-crawling, super strength, spider-sense"
          image="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg"
          team="Avengers"
        />
        <HeroCard
          name="Wonder Woman"
          realName="Diana Prince"
          power="Super strength, speed, combat skills"
          image="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg"
          team="Justice League"
        />
      </div>
    </div>
  );
}

export default App;
