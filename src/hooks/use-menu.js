import { useEffect, useState } from "react";
import { denormalize } from "linkset-menu";

export function useMenu(url, menuID) {
  const [ menuTree, setMenuTree ] = useState();

  useEffect(() => {
    fetch(url, {})
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`Unable to fetch ${url}. ${response.status} ${response.statusText}`);
      })
      .then((json => {
        try {
          const denormalized = denormalize(json, menuID);
          setMenuTree(denormalized);
        }
        catch (e) {
          throw new Error(`Unable to denormalize menu.`);
        }
      }));
  }, [url, menuID]);

  return menuTree;
}
