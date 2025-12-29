import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { Tracker } from "./Tracker";

export default function App() {
  const [monsters, setMonsters] = useState([]);

  function handleAddMonsters(newMonster) {
    setMonsters((monsters) => [...monsters, newMonster]);
  }

  function handleChangeName(id, e) {
    setMonsters((monsters) =>
      monsters.map((monster) =>
        monster.id === id ? { ...monster, name: e.target.value } : monster
      )
    );
  }

  function handleChangeInitiative(id, e) {
    setMonsters((monsters) =>
      monsters.map((monster) =>
        monster.id === id ? { ...monster, initiative: e.target.value } : monster
      )
    );
  }

  function handleChangeHp(id, e) {
    setMonsters((monsters) =>
      monsters.map((monster) =>
        monster.id === id ? { ...monster, hp: e.target.value } : monster
      )
    );
  }

  function handleDelete(id) {
    setMonsters((monsters) => monsters.filter((monster) => monster.id !== id));
  }

  function handleReset() {
    setMonsters([]);
  }

  function handleDamage(value, id) {
    setMonsters((monsters) =>
      monsters.map((monster) =>
        monster.id === id
          ? { ...monster, hp: Number(monster.hp) - value }
          : monster
      )
    );
  }

  function handleHeal(value, id) {
    setMonsters((monsters) =>
      monsters.map((monster) =>
        monster.id === id
          ? { ...monster, hp: Number(monster.hp) + value }
          : monster
      )
    );
  }

  return (
    <div className="container">
      <Header />
      <Form onAddMonsters={handleAddMonsters} />
      <Tracker
        monsters={monsters}
        onChangeName={handleChangeName}
        onChangeInitiative={handleChangeInitiative}
        onChangeHp={handleChangeHp}
        onDelete={handleDelete}
        onReset={handleReset}
        onDamage={handleDamage}
        onHeal={handleHeal}
      />
    </div>
  );
}
