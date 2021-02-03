import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card text-center">
      {/* <div className="card-header"> */}
      <h2>{props.heading}</h2>
      {/* </div> */}
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;

// function Card(props) {
//   return (
//     <div
//       className="card"
//       style={{
//         backgroundImage: props.image ? `url(${props.image})` : "none",
//       }}
//     >
//       {!props.image && (
//         <i className="fa fa-spinner fa-spin" aria-hidden="true" />
//       )}

// {
/* <Button onClick={props.handleBtnClick} data-value="pass" />
      <Button onClick={props.handleBtnClick} data-value="pick" />{" "} */
// }
//     </div>
//   );
// }

// export default Card;
