import { LabeledInput } from "./LabledInput.js";

const style = {
  mainForm: `
    padding: 2rem;
    display: grid;
    place-items: start;
    gap: 0.5rem;
    border-radius: 0.25rem;
    background-color: grey;
  `,
};

const LoginForm = () => {
  return `
    <form style="${style.mainForm}">
      ${LabeledInput("Email:", "email", true)}
      ${LabeledInput("Password:", "password", true)}
      <button type="submit">Submit</button>
    </form>
  `;
};

export { LoginForm };
