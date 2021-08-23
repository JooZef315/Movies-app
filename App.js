import React from "react";
import { StatusBar } from "react-native";
import Root from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Root />
    </>
  );
}
