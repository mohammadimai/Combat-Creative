import React from 'react';

function App() {
  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1571019613914-85f342c55f56?auto=format&fit=crop&w=1470&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: 'white',
      textAlign: 'center',
      padding: '4rem'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Combat Creative</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
        Cinematic content for combat gyms and coaches. Build your brand like your career depends on it — because it does.
      </p>
      <a href="https://calendly.com/maisamali-ent" target="_blank" rel="noopener noreferrer"
         style={{ display: 'inline-block', marginTop: '2rem', padding: '1rem 2rem', backgroundColor: '#dc2626', borderRadius: '8px', color: 'white', textDecoration: 'none' }}>
        Book Your Free Call
      </a>
    </div>
  );
}

export default App;