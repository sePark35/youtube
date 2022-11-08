import React, { useState } from "react";
import { BsYoutube } from "react-icons/bs";

export default function SearchBar() {
  const [text, setText] = useState("");
  return (
    <header>
      <div>
        <BsYoutube />
        <span>Youtube</span>
      </div>
      <form>
        <input type="text" placeholder="Search..." />
        <button>search</button>
      </form>
    </header>
  );
}
