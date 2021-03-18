import React from "react";
import { useMenu } from "../hooks/use-menu";

export default function MenuSlot({ Menu, menuURL, menuID }) {
  const menu = useMenu(menuURL, menuID);
  if (!menu) {
    return <Menu tree={[]} />;
  }
  return <Menu tree={menu.tree} />;
}
