import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
