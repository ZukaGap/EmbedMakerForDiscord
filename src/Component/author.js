import React from "react";

function Author() {
  return (
    <div>
      <h2>Author</h2>
      <div className="Author">
        <input type="name" placeholder="Name" id="autorName" />
        <input type="url" placeholder="URL" id="autorURL" />
        <input type="url" placeholder="Icon URL" id="autorIconURL" />
      </div>
    </div>
  );
}

export default Author;
