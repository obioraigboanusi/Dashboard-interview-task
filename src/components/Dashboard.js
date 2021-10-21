import React from "react";
import { Stats } from "webpack";
import Header from "./Header";
import Layout from "./Layout";
import Welcome from "./Welcome";
function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        {/* <Header />
        <Welcome /> */}
        {/* <Stats /> */}

      </div>
    </Layout>
  );
}

export default Dashboard;
