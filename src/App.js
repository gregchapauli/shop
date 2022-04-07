import React from "react";
import PhoneContainer from "./components/PhoneContainer";
import TvContainer from "./components/tvContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <h1>Welcome to my Shop</h1>
      <hr />
      <div className="section-one">
        <PhoneContainer />
        <TvContainer />
      </div>
    </Provider>
  );
}

export default App;
