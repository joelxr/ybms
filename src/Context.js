import React from "react";

const Context = React.createContext({
  msList: []
});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
