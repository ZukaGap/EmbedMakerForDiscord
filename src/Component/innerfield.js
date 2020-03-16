import React from "react";

function InnerField() {
  return (
    <div>
      <div className="InnerField">
        <input type="checkbox" id="InlineCheck" />
        <input type="name" placeholder="Name" id="FieldName" />
        <input type="text" placeholder="Value" id="FieldText" />
      </div>
    </div>
  );
}

export default InnerField;
