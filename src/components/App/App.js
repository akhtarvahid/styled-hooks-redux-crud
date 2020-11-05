import React from "react";
import { Provider } from "react-redux";
import "../../App.scss";
import store from "../../store";
import Home from "../home/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}