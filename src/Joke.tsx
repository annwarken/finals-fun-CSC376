import { useState } from 'react';

interface JokeElements {
    question: string;
    answer: string;
}

const Joke = ({ question, answer }: JokeElements) => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleReveal = () => {
        setIsRevealed((prev) => !prev);
    };

    return (
        <li>
            <p>{question}</p>
            {isRevealed && <p>{answer}</p>}
            <button onClick={handleReveal}>
                {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
            </button>
        </li>
    );
};

export default Joke;
