import React, { useState } from "react";
import "./styles.css";

var states = {
  Kerala: [
    { name: "Thekkady", rating: "3.8/5" },
    { name: "Wayanad", rating: "4.3/5" },
    { name: "Varkala", rating: "4.3/5" }
  ],
  Karnataka: [
    { name: "Hampi", rating: "4.6/5" },
    { name: "Coorg", rating: "4.2/5" },
    { name: "Gornaka", rating: "4.2/5" },
    { name: "Jog Falls", rating: "4.1/5" }
  ],
  Tamilnadu: [
    { name: "Kodaikanal", rating: "4.4/5" },
    { name: "Mahabalipuram", rating: "4.3/5" },
    { name: "Ooty", rating: "4.1/5" }
  ],
  UnionTerritory: [
    { name: "Andaman & Nicobar Island", rating: "4.5/5" },
    { name: "Pondicherry", rating: "4.1/5" }
  ]
};

const places = Object.keys(states);

export default function App() {
  var [state, setState] = useState("");
  var [best, setBest] = useState([]);

  function clickHandler(visit) {
    setState(visit);
    setBest(states[visit]);
  }

  return (
    <div className="App">
      <h1>
        Here are some of my favourite tourist places to visit in South India.
        Select a state to know places.
      </h1>
      <ul id="states">
        {places.map((visit) => (
          <li key={visit} onClick={() => clickHandler(visit)}>
            {visit}
          </li>
        ))}
      </ul>

      <ul id="places">
        <h3>you have selected {state}!</h3>
        {best.map((place) => (
          <div key={place}>
            <li>
              <h4>Place : {place.name}</h4>
              <h4>Rating : {place.rating}</h4>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
