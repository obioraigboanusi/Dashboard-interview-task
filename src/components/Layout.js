import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
