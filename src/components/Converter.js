import React from "react";
import "../App.css"

function Converter(props) {
  return (
    <div className="conveter_container">
      <p>
        {props.fromAmount} {props.firstInput} is eqauls to
      </p>
      <h3>
        {props.toAmount} {props.secondInput}
      </h3>
      <div>
        <input
          type="number"
          value={props.fromAmount}
          onChange={props.onMoneyChangeFrom}
          min="1"
        />
        <select value={props.firstInput} onChange={props.handleFromCurreny}>
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <input
          type="number"
          value={props.toAmount}
          onChange={props.onMoneyChangeTo}
          min="1"
        />
        <select value={props.secondInput} onChange={props.handleToCurrency}>
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default Converter;
