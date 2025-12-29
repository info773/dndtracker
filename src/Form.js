import { useState } from "react";

export function Form({ onAddMonsters }) {
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");
  const [hp, setHp] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !initiative || !hp) return;

    const newMonster = {
      name,
      initiative,
      hp,
      id: crypto.randomUUID(),
    };

    onAddMonsters(newMonster);
    setName("");
    setInitiative("");
    setHp("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <p>Name</p>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>Initiative</p>
        <input
          type="text"
          value={initiative}
          placeholder="Initiative"
          onChange={(e) => setInitiative(Number(e.target.value))}
        />
      </div>
      <div>
        <p>HP</p>
        <input
          type="text"
          value={hp}
          placeholder="HP"
          onChange={(e) => setHp(Number(e.target.value))}
        />
      </div>
      <button>Add</button>
    </form>
  );
}
