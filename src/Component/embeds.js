import React from "react";

function Embeds() {
  return (
    <div>
      <h2>Embeds</h2>
      <div className="embeds">
        <input type="text" placeholder="Title" id="title" />
        <input type="text" placeholder="Description" id="description" />
        <input type="url" placeholder="URL" id="url" />
        <input type="color" placeholder="Color Dec" id="favcolor" />
        <input type="text" placeholder="Time stamp" id="timestamp" />
        <input type="url" placeholder="Thumbnail URL" id="thumbnail" />
        <input type="url" placeholder="Image URL" id="image" />
      </div>
      <h2>Footer</h2>
      <div className="Footer">
        <input type="url" placeholder="Icon URL" id="IconURL" />
        <input type="text" placeholder="Text" id="Text" />
      </div>
    </div>
  );
}

export default Embeds;
