import React from "react";
// import Button from "../Button";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      {/* <Button
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <Button
        onClick={props.handleBtnClick}
        data-value="pick"
      /> */}
    </div>
  );
}

export default Card;
