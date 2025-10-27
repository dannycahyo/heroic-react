import React from 'react';

// Starter: useEffect exercise
// This file intentionally provides conceptual hints instead of full copyable solutions.

const mockHeroes = [
  { id: 1, name: 'Iron Man', team: 'Avengers' },
  { id: 2, name: 'Spider-Man', team: 'Avengers' },
  { id: 3, name: 'Wonder Woman', team: 'Justice League' },
];

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center', fontSize: 36 }}>
        useEffect Exercises
      </h1>

      <TitleUpdater />
      <Timer />
      <HeroLoader />
    </div>
  );
}

function TitleUpdater() {
  const [count, setCount] = React.useState(0);

  // TODO: Use useEffect to update document.title when `count` changes.
  // Hint: React.useEffect(() => { document.title = `Count: ${count}` }, [count])

  return (
    <div className="card">
      <h2>Title Updater</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  // TODO: Use useEffect to start an interval that increments seconds every 1000ms
  // Remember to return a cleanup function to clearInterval.

  return (
    <div className="card">
      <h2>Timer</h2>
      <p style={{ fontSize: 28 }}>{seconds}s</p>
      <p style={{ opacity: 0.8 }}>
        Add the effect to make this count automatically.
      </p>
    </div>
  );
}

function HeroLoader() {
  const [heroes, setHeroes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // TODO: Use useEffect to simulate fetching heroes (setTimeout) and update state.
  // Show loading while fetching and render the hero list when done.

  return (
    <div className="card">
      <h2>Hero Loader (Simulated)</h2>
      {loading ? (
        <p>Loading... (implement the effect to fetch mock data)</p>
      ) : (
        <ul>
          {heroes.map((h) => (
            <li key={h.id}>
              {h.name} — {h.team}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
