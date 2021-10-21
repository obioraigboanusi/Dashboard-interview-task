import React from "react";

function Stats() {
  const user = [
    {
      id: 1,
      category: "Test Requests",
      size: 20,
    },
    {
      id: 2,
      category: "Test in Progress",
      size: 20,
    },
  ];
  return (
    <section>
      <div>
        <h2>User Stats</h2>
        <span>updated 1 munites ago</span>
      </div>
      <div>
        <ul>
          {user.map((item, index) => {
            return <li key={index}>items</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Stats;
