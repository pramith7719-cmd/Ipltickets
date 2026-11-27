function MatchCard({ match, onBook }) {
  return (
    <article className="match-card">
      <p className="match-label">Match {match.matchNumber}</p>
      <div className="teams-row">
        <span className="team-code">{match.team1}</span>
        <span className="vs-text">VS</span>
        <span className="team-code">{match.team2}</span>
      </div>
      <p>Date: {match.date}</p>
      <p>Venue: {match.venue}</p>
      <p>Ticket Price: ₹{match.price}</p>
      <p>Available Seats: {match.seats}</p>
      <button
        type="button"
        className="book-button"
        onClick={() => onBook(match)}
      >
        Book Now
      </button>
    </article>
  );
}

export default MatchCard;