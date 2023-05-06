import "./labledInput.css";

const LabeledInput = (labelText, inputType, isRequired) => {
  const inputId = `${labelText.toLowerCase().replace(/\s/g, "-")}-input`;
  const labelFor = inputId;

  return `
  <label for="${labelFor}">
    ${labelText}
  </label>
  <input 
    type="${inputType}" 
    id="${inputId} 
    name="${inputId}"
    ${isRequired ? " required" : ""}
    >`;
};

export { LabeledInput };
