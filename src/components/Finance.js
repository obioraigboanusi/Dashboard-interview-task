import React from "react";
import StatItem from "./StatItem";

function Finance() {
  const user = [
    {
      id: 1,
      category: "Revenue",
      size: "#20",
    },
    {
      id: 2,
      category: "Balance",
      size: "#20",
    },
  ];
  return (
    <section className="card finance">
      <div>
        <h2>Fanacial Stats</h2>
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

export default Finance;
