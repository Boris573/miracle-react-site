import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className="search desctop">
            <form className="form-wrapper cf">
                <input type="text" placeholder="Boris 2" required/>
                <button type="sumbit">Search</button>
            </form>
        </div>
    );
}

export default SearchPanel;