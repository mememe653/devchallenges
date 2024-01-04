import { useState, useEffect } from 'react'
import Card from "./Card.jsx";
import './App.css'

function App() {
  const [coffees, setCoffees] = useState([]);
  const [displayAvailable, setDisplayAvailable] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch(error => console.log(error))
  }, []);

  let allButton;
  let availableButton;
  if (displayAvailable) {
    allButton = <button onClick={() => setDisplayAvailable(false)}>All Products</button>;
    availableButton = <button className="selected" onClick={() => setDisplayAvailable(true)}>Available Now</button>;
  } else {
    allButton = <button className="selected" onClick={() => setDisplayAvailable(false)}>All Products</button>;
    availableButton = <button onClick={() => setDisplayAvailable(true)}>Available Now</button>;
  }

  let displayedCoffees = coffees;
  if (displayAvailable) {
    displayedCoffees = coffees.filter(coffee => coffee.available);
  }

  const cards = displayedCoffees.map(coffee => <Card image={coffee.image} title={coffee.name} price={coffee.price} rating={coffee.rating} numVotes={coffee.votes} popular={coffee.popular} available={coffee.available} />);

  return (
    <>
    <div className="bg"></div>
    <main>
      <h1>Our Collection</h1>
      <p>
          Introducing our Coffee Collection, a selection of unique coffees
          from different roast types and origins, expertly roasted in small
          batches and shipped fresh weekly.
      </p>
      <div>
        {allButton}
        {availableButton}
      </div>
      <ul>{...cards}</ul>
    </main>
    </>
  )
}

export default App
