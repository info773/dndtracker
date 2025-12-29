import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { Tracker } from "./Tracker";

export default function App() {
  const [monsters, setMonsters] = useState([]);

  function handleAddMonsters(newMonster) {
    setMonsters((monsters) => [...monsters, newMonster]);
  }

  return (
    <div className="container">
      <Header />
      <Form onAddMonsters={handleAddMonsters} />
      <Tracker monsters={monsters} />
    </div>
  );
}
