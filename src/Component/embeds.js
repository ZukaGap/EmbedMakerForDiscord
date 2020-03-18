import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Embeds extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <h2>Embeds</h2>
        <div className="embeds">
          {/* <input type="text" placeholder="Description" id="description" /> */}
          <textArea
            placeholder="Description, Markdown accepted"
            id="description"
          />
          <input type="text" placeholder="Title" id="title" />
          <input type="url" placeholder="URL" id="url" />
          <input type="color" placeholder="Color Dec" id="favcolor" />
          <DatePicker
            id="timestamp"
            selected={this.state.startDate}
            onChange={this.handleChange}
            isClearable
          />
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
}

export default Embeds;
