const LabeledInput = (labelText, inputType, isRequired) => {
  const inputId = `${labelText.toLowerCase().replace(/\s/g, "-")}-input`;
  const labelFor = inputId;

  const style = {
    label: `
      font-weight: bold;
      margin-bottom: 0.5rem;
    `,
    input: `
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
    `,
  };
  return `
  <label for="${labelFor}" 
    style="${style.label}"
    >
    ${labelText}
  </label>
  <input 
    type="${inputType}" 
    id="${inputId} 
    style="${style.input}" 
    name="${inputId}"
    ${isRequired ? " required" : ""}
    >`;
};

export { LabeledInput };
