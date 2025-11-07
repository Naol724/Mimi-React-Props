import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import menu from "./assets/data.js";

function App() {
  return (
    <div className="App">
      <h1>My Profile Cards</h1>
      <div className="card-container">
        {menu.map((person) => (
          <ProfileCard
            key={person.id}
            image={person.img}
            name={person.name}
            age={person.age}
            occupation={person.occupation}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
