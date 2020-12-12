import React from 'react';
import {Link} from 'react-router-dom';

const Film = ({description}) => {
    return (
        <div className="film">
            <Link to={`/films/${description.id}`}>
                <img alt="" src={description.photo} />
                <div className="film-name">{description.name}</div>
            </Link>
        </div>
    )
}

export default Film;