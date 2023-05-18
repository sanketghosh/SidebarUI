import React from "react";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
