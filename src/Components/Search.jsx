import React from "react";

export default function Search({ setFilter }) {
  return (
    <div class="container">
      <div class="container__search">
        <input
          class="search__input"
          type="search"
          placeholder="Search character..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
}
