import React from "react";

class InnerField extends React.Component{
    render() {
        return (
            <div>    
                <div className="InnerField" >                         
                    <input type="checkbox" id="InlineCheck" />  
                    <input type="text" placeholder="Name" id="FieldName" />
                    <input type="text" placeholder="Value" id="FieldText" />
                </div>            
            </div>
        )
    }
}

export default InnerField;