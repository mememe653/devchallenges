import "./Card.css";

export default function Card({ image, title, price, rating, numVotes, popular, available }) {
  const votesMessage = numVotes > 0 ? `(${numVotes} votes)` : "(No ratings)";

  return (
    <li>
      <div className="image-container">
        <img src={image} />
        {popular ? <span className="popular-tag">Popular</span> : null}
      </div>
      <div className="title-heading">
        <h2 className="title">{title}</h2>
        <span className="price">{price}</span>
      </div>
      <div className="rating-availability">
        <span className={numVotes > 0 ? "review" : "no-review"}><span className="rating">{rating}</span><span className="votes">{votesMessage}</span></span>
        {available ? null : <span className="unavailable">Sold out</span>}
      </div>
    </li>
  );
}
