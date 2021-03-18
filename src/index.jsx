import React from "react";
import { render } from "react-dom";

import MenuSlot from "./components/menu-slot";
import Menu from "./components/menu";

const baseURL = 'https://decoupled-menus.jsonapi.dev';
const menuID = 'main';

function App() {
  return <MenuSlot {...{ Menu, menuURL: `${baseURL}/system/menu/${menuID}/linkset`, menuID }} />
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app-root");
  render(<App />, root);
});
