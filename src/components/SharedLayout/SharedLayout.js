import React, { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div>
      <header className={css["header"]}>
        <nav className={css["navigation"]}>
          <NavLink className={css["link"]} to="/">
            Home
          </NavLink>
          <NavLink className={css["link"]} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
