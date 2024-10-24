import React, { useEffect, useState } from 'react';

const quotes = [
    { text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.", author: "Unknown" },
    { text: "It's okay to not be okay. Just remember, you are not alone.", author: "Unknown" },
    { text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.", author: "Unknown" },
    { text: "Healing takes time, and asking for help is a courageous step.", author: "Unknown" },
    { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
    { text: "You don’t have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
    { text: "The mind is everything. What you think, you become.", author: "Buddha" },
    { text: "Sometimes the most productive thing you can do is rest and relax.", author: "Unknown" },
    { text: "You are not your thoughts. You are the awareness behind them.", author: "Eckhart Tolle" },
    { text: "Self-care is how you take your power back.", author: "Lalah Delia" },
    { text: "Take a deep breath. It’s just a bad day, not a bad life.", author: "Unknown" },
    { text: "Mental health is just as important as physical health.", author: "Unknown" },
    { text: "Your present circumstances don't determine where you can go; they merely determine where you start.", author: "Nido Qubein" },
];


const DynamicQuotes = () => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };

    useEffect(() => {
        // Change quote every 5 seconds
        const intervalId = setInterval(generateRandomQuote, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="quote-container" style={styles.container}>
            <blockquote style={styles.quote}>{currentQuote.text}</blockquote>
            <cite style={styles.author}>- {currentQuote.author}</cite>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#e5f0e6',
        border: '1px solid #033a35',
        borderRadius: '8px',
        height: '20vh',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
    },
    quote: {
        fontSize: '1.5em',
        fontStyle: 'italic',
        color: '#033a35'
    },
    author: {
        display: 'block',
        marginTop: '10px',
        fontWeight: 'bold',
        color: '#033a35'
    },
};

export default DynamicQuotes;