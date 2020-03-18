import React from "react";
import ButterToast, { Cinnamon, POS_TOP, POS_RIGHT } from "butter-toast";
import { ReactComponent as Error } from "./times-solid.svg";
import { ReactComponent as Check } from "./check-solid.svg";
import Embeds from "./embeds";
import Author from "./author";
import Fields from "./fields";
import Template from "./template";
import "../index.css";
const fetch = require("node-fetch");

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe(str, status) {
    if (status === "Error")
      ButterToast.raise({
        content: (
          <Cinnamon.Crunch
            scheme={Cinnamon.Crisp.SCHEME_RED}
            title={str}
            icon={<Error />}
          />
        )
      });
    else if (status === "Error1")
      ButterToast.raise({
        content: (
          <Cinnamon.Crunch
            scheme={Cinnamon.Crisp.SCHEME_ORANGE}
            title={str}
            icon={<Error />}
          />
        )
      });
    else
      ButterToast.raise({
        content: (
          <Cinnamon.Crunch
            scheme={Cinnamon.Crunch.SCHEME_GREEN}
            title={str}
            icon={<Check />}
          />
        )
      });
  }

  handleChange() {
    // ინფუთებიდან დათრევა და სტრუქტურაში ჩაწერა
    Template.content = document.getElementById("MContent").value;
    Template.embeds[0].title = document.getElementById("title").value;
    Template.embeds[0].description = document.getElementById(
      "description"
    ).value;
    Template.embeds[0].url = document.getElementById("url").value;
    //Date TimeStamp pars
    // Template.embeds[0].timestamp = document.getElementById("timestamp").value;
    Template.embeds[0].timestamp = new Date(
      document.getElementById("timestamp").value
    );

    //
    Template.embeds[0].footer.icon_url = document.getElementById(
      "IconURL"
    ).value;
    Template.embeds[0].footer.text = document.getElementById("Text").value;
    Template.embeds[0].thumbnail.url = document.getElementById(
      "thumbnail"
    ).value;
    Template.embeds[0].image.url = document.getElementById("image").value;
    Template.embeds[0].author.name = document.getElementById("autorName").value;
    Template.embeds[0].author.url = document.getElementById("autorURL").value;
    Template.embeds[0].author.icon_url = document.getElementById(
      "autorIconURL"
    ).value;

    var name = document.getElementById("FieldName").value;
    var value = document.getElementById("FieldText").value;
    var inline = document.getElementById("InlineCheck").checked;

    if (name.length != 0 && value.length != 0) {
      Template.embeds[0].fields = [{ name, value, inline }];
    } else {
      Template.embeds[0].fields = null;
    }

    // ფერი/color
    var ColorHex = document.getElementById("favcolor").value;
    ColorHex = ColorHex.substring(1);
    var ColorDec = parseInt(ColorHex, 16);
    Template.embeds[0].color = ColorDec;
    document.getElementById("GeneratedTextID").value = JSON.stringify(Template);
  }

  handleSend() {
    // მისამართი სადაც იგზავნება
    const SelfChatLink = document.getElementById("Link").value;

    if (SelfChatLink) {
      fetch(SelfChatLink, {
        method: "POST",
        body: JSON.stringify(Template),
        headers: { "Content-Type": "application/json" }
      })
        .then(() => {
          this.onClickMe("Gamembeds Sent.", "Succes");
        })
        .catch(() => {
          this.onClickMe("Err Responce", "Error");
        });
    } else {
      // alert("Can't Send\nBecause You Need WebHook link");
      this.onClickMe("Can't Send\nBecause You Need WebHook link", "Error1");
    }
  }

  render() {
    return (
      <div className="main">
        <div className="visual">
          <input type="url" placeholder="WebHook Link" id="Link" />
          <h2>Main Content</h2>
          <textArea
            className="content"
            placeholder="Message body, Markdown accepted"
            id="MContent"
          />
          <Embeds />
          <Author />
          <Fields />
        </div>
        <div className="GeneratedJSON">
          <div className="Submit">
            <input
              type="submit"
              value="Generate"
              id="SubmitGenerate"
              onClick={this.handleChange}
            />
            <input
              type="submit"
              value="Send"
              id="SubmitSend"
              onClick={this.handleSend}
            />
            <ButterToast
              position={{ vertical: POS_TOP, horizontal: POS_RIGHT }}
            />
          </div>
          <textArea className="GeneratedText" id="GeneratedTextID" />
        </div>
      </div>
    );
  }
}

export default App;
