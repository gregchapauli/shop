import React from "react";
import { connect } from "react-redux";
import phone from "../images/phone.png";
import { buyPhone } from "../redux/Phone/actionPhone";

function PhoneComponent(props) {
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité:
        <span id="count"> {props.phones}</span>
      </p>
      <button onClick={() => props.buyPhone()}>Acheter</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
