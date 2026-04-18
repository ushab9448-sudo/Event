import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search events by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;
