import React from "react";

class Embeds extends React.Component{
    render() {
        return (
            <div> 
                <h2>Embeds</h2>
                <div className="embeds" >
                    <input type="text" placeholder="title" id="title" />
                    <input type="text" placeholder="description" id="description" />
                    <input type="text" placeholder="url" id="url" />
                    <input type="color" placeholder="Color Dec" id="favcolor" />   
                    <input type="text" placeholder="time stamp" id="timestamp" />
                    <input type="text" placeholder="thumbnail" id="thumbnail" /> 
                    <input type="text" placeholder="image" id="image" /> 
                </div>
                <h2>Footer</h2>
                <div className="Footer" >    
                    <input type="text" placeholder="Icon URL" id="IconURL" /> 
                    <input type="text" placeholder="Text" id="Text" />               
                </div>
            </div>
        )
    }
}

export default Embeds;