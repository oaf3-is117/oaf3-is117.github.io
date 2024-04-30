import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import "../styles/gameCard.css"

interface CardProps {
    game: {
        background_image: string;
        genres: string[];
        id: number;
        name: string;
        platforms: string[];
        rating: number;
        tags: string[];
    };
    undoSelected: () => void
}

const GameCard = ({ game, undoSelected }: CardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [gameInfo, setGameInfo] = useState(null)

    useEffect(() => {
        fetch(`/data/${game.id}.json`)
            .then(response => response.text())
            .then(data => JSON.parse(data))
            .then(game => {
                setGameInfo({
                    name: game.name,
                    description: game.description_raw,
                    background_image: game.background_image,
                    esrb_rating: game.esrb_rating,
                    rating: game.rating,
                    ratings: game.ratings.map(rating => { return { title: rating.title, count: rating.count } }),
                    genres: game.genres.map((genre: any) => genre.name),
                    tags: game.tags.map((tag: any) => tag.name),
                    platforms: game.platforms.map(platform => platform.platform.name)
                })
                console.log(gameInfo)
            })
    }, [game.id])

    const onClick = (e) => {
        if (e.target.className == "game-card-container") {
            undoSelected()
        }
    }
    return (
        <div ref={containerRef} className="game-card-container" onClick={onClick}> {/* Container with custom class */}
            {gameInfo &&
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={gameInfo.background_image} />
                    <Card.Body>
                        <Card.Title>{gameInfo.name}</Card.Title>
                        <Card.Subtitle>{gameInfo.description}</Card.Subtitle>
                        <Card.Text>
                            <strong>Rating:</strong> {gameInfo.rating}
                        </Card.Text>
                        <ul>
                            {gameInfo.ratings.map((rating, index) => (
                                <li key={index}>{rating.title}: {rating.count}</li>
                            ))}
                        </ul>
                        <strong>Genres:</strong>
                        <ul>
                            {gameInfo.genres.map((genre, index) => (
                                <li key={index}>{genre}</li>
                            ))}
                        </ul>
                        <strong>Platforms:</strong>
                        <ul>
                            {gameInfo.platforms.map((platform, index) => (
                                <li key={index}>{platform}</li>
                            ))}
                        </ul>
                        <strong>Tags:</strong>
                        <ul>
                            {gameInfo.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default GameCard;
