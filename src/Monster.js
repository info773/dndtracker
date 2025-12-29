export function Monster({ monsters }) {
  return (
    <ul>
      {monsters.map((monster) => (
        <li>
          <input type="text" value={monster.name} />
          <input type="text" value={monster.initiative} />
          <input type="text" value={monster.hp} />
        </li>
      ))}
    </ul>
  );
}
