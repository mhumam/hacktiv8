import React from 'react'

const MovieCard = ({ title, year, image }) => {
    return (
        <div className="movie-item">
            <div className="movie-item__header">
                <img className="movie-item__header__poster" alt={title} src={image} />
                <div className="movie-item__header__rating">
                    <p>⭐️<span className="movie-item__header__rating__score">{year}</span></p>
                </div>
            </div>
            <div className="movie-item__content">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default MovieCard
