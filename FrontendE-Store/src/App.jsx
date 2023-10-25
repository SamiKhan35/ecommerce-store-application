import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import store from "./myredux/Store";
function App() {
  return (
    <>
    <Provider store={store}>
      <LandingPage/>

    </Provider>
    
    </>
  );
}

export default App;
