import { useState } from "react";

export function Form({ onAddMonsters }) {
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState(0);
  const [hp, setHp] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newMonster = {
      name,
      initiative,
      hp,
      id: crypto.randomUUID(),
    };

    onAddMonsters(newMonster);
    setName("");
    setInitiative(0);
    setHp(1);
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
