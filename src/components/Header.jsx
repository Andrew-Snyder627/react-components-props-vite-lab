import React from "react";

// Header receives name as a prop from App and displays the blogs title at the top of the site
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
