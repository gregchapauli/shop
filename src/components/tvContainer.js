import React from "react";
import { useSelector, useDispatch } from "react-redux";
import tv from "../images/tv.png";
import { buyTv } from "../redux/tv/actionTv";

function TvContainer() {
  const television = useSelector((state) => state.television.tv);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={tv} alt="tv" />
      <p>
        Disponibilité:
        <span id="count"> {television}</span>
      </p>
      <button onClick={() => dispatch(buyTv())}>Acheter</button>
    </div>
  );
}

export default TvContainer;
