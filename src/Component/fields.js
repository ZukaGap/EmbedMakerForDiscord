import React from "react";
import InnerField from "./innerfield"

class Fields extends React.Component{
    render() {
        // function fieldAdd() {
        //     console.log("aq var fieldadd");

        // }

        return (
            <div className="Field" id="Fie" >                
                <h2>Fields</h2>                
                <InnerField />
                {/* <input type="button" value="Add Field" onClick={fieldAdd} /> */}
            </div>
        )
    }
}

export default Fields;