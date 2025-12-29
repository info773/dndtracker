import { useState } from "react";

export function Monster({
  monsters,
  onChangeName,
  onChangeInitiative,
  onChangeHp,
  onDelete,
  onDamage,
  onHeal,
}) {
  const [calcHp, setCalcHp] = useState("");

  return (
    <div>
      {monsters.length > 0 ? (
        <div className="list-header">
          <span></span>
          <span>Name</span>
          <span>Initiative</span>
          <span>HP</span>
        </div>
      ) : null}
      <ul className="monsterlist">
        {monsters.map((monster) => (
          <li
            key={monster.id}
            className={`monsterline ${monster.hp <= 0 ? "dead" : ""}`}
          >
            <button onClick={() => onDelete(monster.id)}>❌</button>
            <input
              type="text"
              value={monster.name}
              onChange={(e) => onChangeName(monster.id, e)}
            />
            <input
              type="text"
              value={monster.initiative}
              onChange={(e) => onChangeInitiative(monster.id, e)}
            />
            <input
              type="text"
              value={monster.hp}
              onChange={(e) => onChangeHp(monster.id, e)}
            />
            <span className="calc">
              <button
                onClick={() => {
                  onDamage(calcHp, monster.id);
                  setCalcHp("");
                }}
              >
                -
              </button>
              <input
                type="text"
                value={calcHp}
                onChange={(e) => setCalcHp(Number(e.target.value))}
              />
              <button
                onClick={() => {
                  onHeal(calcHp, monster.id);
                  setCalcHp("");
                }}
              >
                +
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
