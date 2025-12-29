import { useState } from "react";
import { Monster } from "./Monster";
import { Reset } from "./Reset";

export function Tracker({
  monsters,
  onChangeName,
  onChangeInitiative,
  onChangeHp,
  onDelete,
  onReset,
  onDamage,
  onHeal,
}) {
  const [orderBy, setOrderBy] = useState("descending");

  if (orderBy === "descending") {
    monsters.sort((a, b) => b.initiative - a.initiative);
  } else if (orderBy === "ascending") {
    monsters.sort((a, b) => a.initiative - b.initiative);
  }
  return (
    <div className="list">
      {monsters.length > 0 ? (
        <p>
          <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </p>
      ) : null}

      <Monster
        monsters={monsters}
        onChangeName={onChangeName}
        onChangeInitiative={onChangeInitiative}
        onChangeHp={onChangeHp}
        onDelete={onDelete}
        onDamage={onDamage}
        onHeal={onHeal}
      />
      {monsters.length > 0 ? <Reset onReset={onReset} /> : null}
    </div>
  );
}
