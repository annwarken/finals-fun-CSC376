import Joke from '../Joke';

const Jokes = () => {
    const jokesData = [
        { question: "Why was the math book sad?", answer: "Because it had too many problems." },
        { question: "What do you call fake spaghetti?", answer: "An impasta." },
        { question: "Why don't scientists trust atoms?", answer: "Because they make up everything." },
        { question: "Why did the student eat his homework?", answer: "Because his teacher said it was a piece of cake." },
        { question: "What do you call cheese that isn't yours?", answer: "Nacho cheese." },
        { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field." },
        { question: "What did one pencil say to the other pencil?", answer: "You're looking sharp!" },
        { question: "Why do computers get tired during exams?", answer: "They have too many tabs open." },
        { question: "Why did the student bring a ladder to school?", answer: "To reach the high school." },
        { question: "Why did the skeleton fail his test?", answer: "He didn't have the guts to answer the questions." },
        { question: "What is a physicist's favorite food?", answer: "Fission chips." },
        { question: "Why are chemistry jokes so funny?", answer: "Because they have good reaction." },
        { question: "Why was the calendar so popular?", answer: "It had so many dates." },
        { question: "Why did the student sleep in class?", answer: "Because he was studying history… it was a napoleon-ic task." },
        { question: "Why did the comma break up with the apostrophe?", answer: "It was the last pause." },
        { question: "What do you call a belt made of watches?", answer: "A waist of time." },
        { question: "What did the janitor say when he jumped out of the closet?", answer: "Supplies!" },
        { question: "Why don't skeletons fight each other?", answer: "They don't have the guts." },
        { question: "Why do ducks make good detectives?", answer: "They always quack the case." },
        { question: "Why did the bicycle fall over?", answer: "Because it was two-tired." },
    ];

    return (
        <div>
            <h1>Jokes</h1>

            <h2>Classic School Jokes</h2>
            <ul>
                {jokesData.slice(0, 5).map((joke, index) => (
                    <Joke key={index} question={joke.question} answer={joke.answer} />
                ))}
            </ul>

            <h2>Lighthearted Exam Jokes</h2>
            <ul>
                {jokesData.slice(5, 10).map((joke, index) => (
                    <Joke key={index + 5} question={joke.question} answer={joke.answer} />
                ))}
            </ul>

            <h2>Subject-Specific Jokes</h2>
            <ul>
                {jokesData.slice(10, 15).map((joke, index) => (
                    <Joke key={index + 10} question={joke.question} answer={joke.answer} />
                ))}
            </ul>

            <h2>Random Fun Jokes</h2>
            <ul>
                {jokesData.slice(15).map((joke, index) => (
                    <Joke key={index + 15} question={joke.question} answer={joke.answer} />
                ))}
            </ul>

            <h3>Jokes curtesy of ChatGPT.</h3>
        </div>
    );
};

export default Jokes;
