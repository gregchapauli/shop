import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import phone from "../images/phone.png";
import { buyPhone } from "../redux/Phone/actionPhone";

function PhoneContainer() {
  const [totalPhone, setTotalPhone] = useState(1);

  const phones = useSelector((state) => state.phone.phones);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité:
        <span id="count"> {phones}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => dispatch(buyPhone(totalPhone))}>Acheter</button>
        <input
          type="number"
          value={totalPhone}
          onChange={(e) => setTotalPhone(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PhoneContainer;
