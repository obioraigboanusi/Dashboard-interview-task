import React from "react";

function StatItem({ item }) {
  return (
    <li className="stats-item">
      <div>
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <div>
        <span className="bold">{item.size}</span>
        <span>{item.category}</span>
      </div>
    </li>
  );
}

export default StatItem;
