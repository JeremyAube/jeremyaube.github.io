import { Link } from "gatsby";
import React from "react";

export default function Header({ siteTitle }) {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  );
}
