import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import Stats from "../components/Stats";
import Finance from "../components/Finance";
function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <Header />
        <Welcome />
        <Stats />
        <Finance />
      </div>
    </Layout>
  );
}

export default Dashboard;
