import React from "react";

const Context = React.createContext({
  msList: [],
  msFavored: [],
  handleDetailClick() {},
  handleFavoriteClick() {},
  handleCloseSidebar() {}
});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
