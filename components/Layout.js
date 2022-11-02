import * as React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";

export default function Layout({ title, children }) {
  return (
    <div className={container}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
