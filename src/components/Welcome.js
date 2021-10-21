import React from "react";

function Welcome() {
  return (
    <section className="card welcome">
      <div>
        <h3>
          Welcome <i class="fa fa-user-circle" aria-hidden="true"></i>
        </h3>
        <span>Admin Dashboard</span>
      </div>
      <div>
        <span>Logged in as:</span>
        <span className="boss">Mr. Boss</span>
      </div>
    </section>
  );
}

export default Welcome;
