import React from "react";
import { connect } from "react-redux";
import phone from "../images/phone.png";

function PhoneComponent(props) {
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité:
        <span id="count">{props.phones}</span>
      </p>
      <button>Acheter</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};

export default connect(mapStateToProps)(PhoneComponent);
