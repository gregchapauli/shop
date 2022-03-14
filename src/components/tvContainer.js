import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import tv from "../images/tv.png";
import { buyTv } from "../redux/tv/actionTv";

function TvContainer() {
  const [totalTv, setTotalTv] = useState(1);

  const television = useSelector((state) => state.television.tv);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={tv} alt="tv" />
      <p>
        Disponibilité:
        <span id="count"> {television}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => dispatch(buyTv(totalTv))}>Acheter</button>
        <input
          type="number"
          value={totalTv}
          onChange={(e) => setTotalTv(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TvContainer;
