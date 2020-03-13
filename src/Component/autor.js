import React from "react";

class Autor extends React.Component{
    render() {
        return (
            <div>                
                <h2>Autor</h2>
                <div className="Autor" >
                    <input type="text" placeholder="Name" id="autorName" />
                    <input type="text" placeholder="URL" id="autorURL" />
                    <input type="text" placeholder="Icon URL" id="autorIconURL" />                                  
                </div>            
            </div>
        )
    }
}

export default Autor;