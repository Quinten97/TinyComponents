import { App } from "../App.js";

const MainRender = (component) => {
  const app = document.getElementById("app");

  const componentElement = document.createElement("div");
  componentElement.innerHTML = component;
  app.appendChild(componentElement);
};

MainRender(App());
