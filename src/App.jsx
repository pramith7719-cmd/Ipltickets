import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import "./App.css";

const matchesData = [
  {
    id: 1,
    matchNumber: 1,
    team1: "CSK",
    team2: "MI",
    date: "April 14",
    venue: "Mumbai",
    price: 1500,
    seats: 45
  },
  {
    id: 2,
    matchNumber: 2,
    team1: "RCB",
    team2: "KKR",
    date: "April 16",
    venue: "Bengaluru",
    price: 1800,
    seats: 30
  },
  {
    id: 3,
    matchNumber: 3,
    team1: "GT",
    team2: "RR",
    date: "April 18",
    venue: "Ahmedabad",
    price: 1200,
    seats: 60
  },
  {
    id: 4,
    matchNumber: 4,
    team1: "SRH",
    team2: "DC",
    date: "April 20",
    venue: "Hyderabad",
    price: 1000,
    seats: 25
  },
  {
    id: 5,
    matchNumber: 5,
    team1: "LSG",
    team2: "PBKS",
    date: "April 22",
    venue: "Lucknow",
    price: 1100,
    seats: 40
  }
];

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  function handleBookMatch(match) {
    setSelectedMatch(match);
  }

  return (
    <div className="app-container">
      <Navbar />
      <Hero />

      <main>
        <section id="matches" className="matches-section">
          <h2>Upcoming Matches</h2>
          <div className="matches-grid">
            {matchesData.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onBook={handleBookMatch}
              />
            ))}
          </div>
        </section>

        {selectedMatch && (
          <section id="booking-status" className="selected-banner">
            <h3>Selected Match: {selectedMatch.team1} VS {selectedMatch.team2}</h3>
            <p>
              {selectedMatch.date} • {selectedMatch.venue} • ₹{selectedMatch.price} per ticket
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;