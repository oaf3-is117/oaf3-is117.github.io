import { useEffect, useState } from "react";
import { Container, Row, Col, Card as BootstrapCard, Form, Button } from 'react-bootstrap';
import Card from '../components/Card'; // Import the Card component
import "../styles/search.css"

function Search() {
    const [games, setGames] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [showAllGenres, setShowAllGenres] = useState<boolean>(false);
    const [showAllTags, setShowAllTags] = useState<boolean>(false);
    const [selectedGame, setSelectedGame] = useState<any | null>(null); // State to track the selected game

    const handleSearch = () => {
        const results = games.filter(game =>
            game.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedGenres.length === 0 || selectedGenres.every(genre => game.genres.includes(genre))) &&
            (selectedTags.length === 0 || selectedTags.every(tag => game.tags.includes(tag)))
        );
        setSearchResults(results);
    };

	const undoSelected = () => {
		setSelectedGame(null)
	}

    useEffect(() => {
        fetch("/data/all_data.json")
            .then(response => response.text())
            .then(data => {
                const games: any[] = (JSON.parse(data))["results"]
                const game_data = games.map(game => {
                    return {
                        id: game.id,
                        background_image: game.background_image,
                        name: game.name,
                        rating: game.rating,
                        genres: game.genres.map((genre: any) => genre.name),
                        tags: game.tags.map((tag: any) => tag.name),
						platforms: game.platforms.map((platform : any) => platform.platform.name)
                    }
                });
                setSearchResults(game_data);
                setGames(game_data);

				console.log(game_data)
            })
    }, [])

    const handleCardClick = (game: any) => {
        setSelectedGame(game); // Set the selected game when a card is clicked
    };

    return (
        <Container fluid>
            <Row>
                {/* Sidebar */}
                <Col md={3}>
                    <BootstrapCard>
                        <BootstrapCard.Body>
                            <BootstrapCard.Title>Search</BootstrapCard.Title>
                            <Button variant="primary" onClick={handleSearch}>Search</Button>
                            <Form.Group controlId="searchTerm">
                                <Form.Control
                                    type="text"
                                    placeholder="Search term"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="genres">
                                <Form.Label>Genres</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    id="showAllGenres"
                                    label="Show all genres"
                                    checked={showAllGenres}
                                    onChange={() => setShowAllGenres(!showAllGenres)}
                                />
                                {games.length > 0 && (
                                    [...new Set(games.reduce((acc, cur) => [...acc, ...cur.genres], []))].map((genre : any) => (
                                        <Form.Check
                                            key={genre}
                                            type="checkbox"
                                            id={genre}
                                            label={genre}
                                            checked={selectedGenres.includes(genre)}
                                            onChange={() => {
                                                if (selectedGenres.includes(genre)) {
                                                    setSelectedGenres(selectedGenres.filter(selectedGenre => selectedGenre !== genre));
                                                } else {
                                                    setSelectedGenres([...selectedGenres, genre]);
                                                }
                                            }}
                                        />
                                    ))
                                )}
                            </Form.Group>
                            <Form.Group controlId="tags">
                                <Form.Label>Tags</Form.Label>
                                {games.length > 0 && (
                                    [...new Set(games.reduce((acc, cur) => [...acc, ...cur.tags], []))].map((tag : any) => (
                                        <Form.Check
                                            key={tag}
                                            type="checkbox"
                                            id={tag}
                                            label={tag}
                                            checked={selectedTags.includes(tag)}
                                            onChange={() => {
                                                if (selectedTags.includes(tag)) {
                                                    setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
                                                } else {
                                                    setSelectedTags([...selectedTags, tag]);
                                                }
                                            }}
                                        />
                                    ))
                                )}
                                <Form.Check
                                    type="checkbox"
                                    id="showAllTags"
                                    label="Show all tags"
                                    checked={showAllTags}
                                    onChange={() => setShowAllTags(!showAllTags)}
                                />
                            </Form.Group>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                </Col>
                {/* Main area */}
                <Col md={9}>
                    <h2>Results</h2>
                    <Row>
                        {searchResults.map((result) => (
                            <Col key={result.id} md={4} className="mb-4">
                                <BootstrapCard onClick={() => handleCardClick(result)}>
                                    <BootstrapCard.Img variant="top" src={result.background_image} />
                                    <BootstrapCard.Body>
                                        <BootstrapCard.Title>{result.name}</BootstrapCard.Title>
                                    </BootstrapCard.Body>
                                </BootstrapCard>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {selectedGame && <Card game={selectedGame} undoSelected={undoSelected} />} {/* Render the Card component when a game is selected */}
        </Container>
    )
}

export default Search;
