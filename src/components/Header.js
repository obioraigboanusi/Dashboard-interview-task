import React from "react";

function Header() {
  return (
    <section className="header card">
      <div>
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div className="details">
        <span>Mr Boss</span>
        <span>Lab</span>
      </div>
      <div className="avatar">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </div>
    </section>
  );
}

export default Header;
