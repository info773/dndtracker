import { useState } from "react";
import { Monster } from "./Monster";

export function Tracker({ monsters }) {
  const [orderBy, setOrderBy] = useState("descending");

  if (orderBy === "descending") {
    monsters.sort((a, b) => b.initiative - a.initiative);
  } else if (orderBy === "ascending") {
    monsters.sort((a, b) => a.initiative - b.initiative);
  }
  return (
    <div>
      <p>
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="descending">Descending</option>
          <option value="ascending">Ascending</option>
        </select>
      </p>

      <Monster monsters={monsters} />
    </div>
  );
}
