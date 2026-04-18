import React from 'react';

function EventCard({ event }) {
    return (
        <div className="event-card">
            {event.image && <img src={event.image} alt={event.title} className="event-image" />}
            <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-category">Category: {event.category}</p>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Time:</strong> {event.time}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Price:</strong> {event.price}</p>
                </div>
                <button className="event-button">Learn More</button>
            </div>
        </div>
    );
}

export default EventCard;
