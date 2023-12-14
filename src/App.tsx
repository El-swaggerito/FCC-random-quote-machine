import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

interface quotes {
  quote: string;
  author: string;
}

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColors = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 1s ease";
function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [randomColors, setRandomColors] = useState(getRandomColors());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColors(getRandomColors());
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColors, transition }}
    >
      <div id="quote-box">
        <div id="quote-content" style={{ color: randomColors, transition }}>
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href="twitter.com/intent/tweet"
            id="tweet-quote"
            style={{
              backgroundColor: randomColors,
              transition,
              marginRight: "10px",
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColors, transition }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
