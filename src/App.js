import React from "react";
import PhoneContainer from "./components/PhoneContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer />
      </div>
    </Provider>
  );
}

export default App;
