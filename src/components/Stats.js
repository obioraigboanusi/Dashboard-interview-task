import React from "react";
import StatItem from "./StatItem";

function Stats() {
  const user = [
    {
      id: 1,
      category: "Test Requets",
      size: 20,
    },
    {
      id: 2,
      category: "Consulting",
      size: 20,
    },
    {
      id: 2,
      category: "Pending",
      size: 20,
    },
    {
      id: 2,
      category: "Tests",
      size: 20,
    },
  ];
  return (
    <section className="stats card">
      <div>
        <h2>User Stats</h2>
        <span>updated 1 munites ago</span>
      </div>

      <ul>
        {user.map((item, index) => (
          <StatItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default Stats;
