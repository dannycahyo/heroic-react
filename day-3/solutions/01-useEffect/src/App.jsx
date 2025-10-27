import React from 'react';

const mockHeroes = [
  { id: 1, name: 'Iron Man', team: 'Avengers', power: 'Technology' },
  {
    id: 2,
    name: 'Spider-Man',
    team: 'Avengers',
    power: 'Spider abilities',
  },
  {
    id: 3,
    name: 'Wonder Woman',
    team: 'Justice League',
    power: 'Super strength',
  },
  {
    id: 4,
    name: 'Batman',
    team: 'Justice League',
    power: 'Intellect',
  },
];

export default function App() {
  const [showTimer, setShowTimer] = React.useState(true);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 48,
          marginBottom: 40,
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
        }}
      >
        useEffect Hook Examples
      </h1>

      <Clock />
      <TitleUpdater />

      <button
        onClick={() => setShowTimer(!showTimer)}
        style={{ display: 'block', margin: '0 auto 20px' }}
      >
        {showTimer ? 'Hide Timer (test cleanup)' : 'Show Timer'}
      </button>

      {showTimer && <Timer />}
      <HeroLoader />
    </div>
  );
}

// EXERCISE 1: Document Title Update
function TitleUpdater() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `Count: ${count}`;
    console.log('Title updated to:', count);
  }, [count]);

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>📄 Document Title Updater</h2>
      <p style={{ fontSize: 24 }}>Count: {count}</p>
      <p style={{ opacity: 0.7, fontSize: 14 }}>
        Check the browser tab title!
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// EXERCISE 2: Timer with Cleanup
function Timer() {
  const [seconds, setSeconds] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    console.log('Timer effect started');

    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('Cleaning up timer');
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h2 style={{ marginTop: 0 }}>⏱️ Timer with Cleanup</h2>
      <p
        style={{ fontSize: 48, fontWeight: 'bold', margin: '20px 0' }}
      >
        {seconds}s
      </p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '⏸ Pause' : '▶️ Resume'}
      </button>
      <button
        onClick={() => {
          setSeconds(0);
          setIsRunning(true);
        }}
      >
        🔄 Reset
      </button>
    </div>
  );
}

// EXERCISE 3: Simulated Data Fetching with Loading State
function HeroLoader() {
  const [heroes, setHeroes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    console.log('Fetching heroes...');
    setLoading(true);

    const timeoutId = setTimeout(() => {
      try {
        setHeroes(mockHeroes);
        setLoading(false);
        console.log('Heroes loaded successfully');
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return (
      <div
        className="card"
        style={{ textAlign: 'center', padding: 60 }}
      >
        <div
          style={{
            border: '4px solid rgba(255,255,255,0.2)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            width: 50,
            height: 50,
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px',
          }}
        ></div>
        <p style={{ fontSize: 18 }}>Loading heroes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="card"
        style={{
          backgroundColor: 'rgba(255,100,100,0.2)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#ff6b6b', fontSize: 18 }}>
          ❌ Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>
        🦸 Loaded Heroes ({heroes.length})
      </h2>
      <div style={{ display: 'grid', gap: 10 }}>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: 15,
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <h3 style={{ margin: '0 0 5px', fontSize: 18 }}>
              {hero.name}
            </h3>
            <p style={{ opacity: 0.7, margin: 0, fontSize: 14 }}>
              Team: {hero.team} | Power: {hero.power}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// BONUS: Clock Component
function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="card"
      style={{ textAlign: 'center', marginBottom: 20 }}
    >
      <h2 style={{ marginTop: 0 }}>🕐 Current Time</h2>
      <p
        style={{ fontSize: 32, fontWeight: 'bold', margin: '10px 0' }}
      >
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
