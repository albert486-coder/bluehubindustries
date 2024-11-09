import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full  w-full  max-w-60 customShadow">
        <div>
          <nav className="grid p-4">
            <Link className="px-2 py-1 hover:bg-slate-100">Dashboard</Link>
            <Link className="px-2 py-1 hover:bg-slate-100">Orders</Link>
            <Link className="px-2 py-1 hover:bg-slate-100">Products</Link>
            <Link className="px-2 py-1 hover:bg-slate-100">Users</Link>
          </nav>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
