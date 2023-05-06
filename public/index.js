import { App } from "../App.js";

export const MainRender = () => {
  const app = document.getElementById("app");

  const componentElement = document.createElement("div");
  componentElement.innerHTML = App();
  app.appendChild(componentElement);
};

MainRender();
