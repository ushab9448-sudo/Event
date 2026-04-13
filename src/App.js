import React, { useState } from 'react';
import { EVENTS_DATA } from './data/events';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filters by Title, College, or Category
  const filteredEvents = EVENTS_DATA.filter((event) => {
    const search = searchTerm.toLowerCase();
    return (
      event.title.toLowerCase().includes(search) ||
      event.college.toLowerCase().includes(search) ||
      event.category.toLowerCase().includes(search)
    );
  });

  return (
    <div className="container">
      <header className="main-header">
        <h1>Campus Event Finder</h1>
        <p>Connecting students across Davanagere and beyond</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by event, college (e.g. GMIT), or category..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="stats">
          Showing {filteredEvents.length} events
        </div>
      </div>

      <main className="event-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <article key={event.id} className="event-card">
              <div className="card-header">
                <span className={`category-tag ${event.category.toLowerCase()}`}>
                  {event.category}
                </span>
                <span className="event-date">{event.date}</span>
              </div>
              <h3>{event.title}</h3>
              <p className="college-location">📍 {event.college}</p>
              <p className="description">{event.description}</p>
              <button className="register-btn">Register Interest</button>
            </article>
          ))
        ) : (
          <div className="no-results">
            <h3>No events found.</h3>
            <p>Try searching for something else like "Technical" or "Workshop".</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;