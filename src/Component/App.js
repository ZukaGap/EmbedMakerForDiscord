import React from "react";
import Embeds from "./embeds"
import Autor from "./autor"
import Fields from "./fields"
import Template from "./template"
import ChatLink from "../WebHookLink"
import "../index.css";
const fetch = require('node-fetch');

class App extends React.Component{
    handleChange() {
        // მისამართი სადაც იგზავნება
        // ChatLink = document.getElementById("Link").value;
        
        // ინფუთებიდან დათრევა და სტრუქტურაში ჩაწერა
        Template.content = document.getElementById("MContent").value;
        Template.embeds[0].title = document.getElementById("title").value;
        Template.embeds[0].description = document.getElementById("description").value;
        Template.embeds[0].url = document.getElementById("url").value;      
        Template.embeds[0].timestamp = document.getElementById("timestamp").value;         
        Template.embeds[0].footer.icon_url = document.getElementById("IconURL").value; 
        Template.embeds[0].footer.text = document.getElementById("Text").value; 
        Template.embeds[0].thumbnail.url = document.getElementById("thumbnail").value; 
        Template.embeds[0].image.url = document.getElementById("image").value; 
        Template.embeds[0].author.name = document.getElementById("autorName").value;
        Template.embeds[0].author.url = document.getElementById("autorURL").value;
        Template.embeds[0].author.icon_url = document.getElementById("autorIconURL").value;
        Template.embeds[0].fields[0].name = document.getElementById("FieldName").value;
        Template.embeds[0].fields[0].value = document.getElementById("FieldText").value;
        // Template.embeds[0].fields[0].inline = document.getElementById("InlineCheck").value;    
        
        // ChatLink = document.getElementById("Link").value;
        
        // ფერი
        var ColorHex = document.getElementById("favcolor").value;
        ColorHex = ColorHex.substring(1);
        var ColorDec = parseInt(ColorHex,16);        
        Template.embeds[0].color =ColorDec;        

        // კონსოლში ბეჭდავს სტრუქტურას
        console.log(Template);   

        fetch(ChatLink ,
            {
                method: 'POST',
                body: JSON.stringify(Template),
                headers: { 'Content-Type': 'application/json' }
            })
        .then(()=>{console.log(`gamembeds sent. you can generate JSON at $testsite`)})
        .catch(()=>{console.log('err responce')})
    }
    render() {
        return (
            <div>            
                {/* <input type="text" placeholder="WebHook Link" id="Link" /> */}
                <h2>Main Content</h2>               
                <div className="content" >
                    <input type="text" placeholder="Content" id="MContent" />
                </div>
                <Embeds />
                <Autor />
                <Fields />
                <input type="button" value="Submit" id="Submit" onClick={this.handleChange} />
            </div>
        )
    }
}

export default App;