import React, { useState } from "react";
import "./Calculator.css";

const RegistrationForm = () => {
  const [firstStock, setFirstStock] = useState('');
  const [secondStock, setsecondStock] = useState('');
  const [count1, setCount1] = useState('');
  const [count2, setCount2] = useState('');
  const [result, setResult] = useState('');

  const doCalculation = (e) => {
    e.preventDefault();

    setResult(
        (parseFloat(firstStock) * parseFloat(count1) + parseFloat(secondStock) * parseFloat(count2)) /
        (parseFloat(count1) + parseFloat(count2))

    );
 
  };

  return (
    <>
      <div className="container">
          <br />
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
        <h3>Stock Average Calculator</h3>
          <form>
            <div className="form-group">
              <label htmlFor="first">Enter First Stock Price:</label>
              <input
              className="form-control"
                type="text"
                id="field1"
                name="field1"
                value={firstStock}
                onChange={(e) => {
                  setFirstStock(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="first">Enter First Stock Count:</label>
              <input
               className="form-control"
                type="text"
                id="field1"
                name="field1"
                value={count1}
                onChange={(e) => {
                  setCount1(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="first">Enter Second Stock Price:</label>
              <input
               className="form-control"
                type="text"
                id="field1"
                name="field1"
                value={secondStock}
                onChange={(e) => {
                  setsecondStock(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="first">Enter Second Stock Count:</label>
              <input
               className="form-control"
                type="text"
                id="field1"
                name="field1"
                value={count2}
                onChange={(e) => {
                  setCount2(e.target.value);
                }}
              />
            </div>
            <button className="btn btn-primary" onClick={doCalculation}>
              Calculate
            </button>
            <br />
            <br />

            <div>
              <h3>  {isNaN(result) ? "Please enter valid data . ." : result} </h3>
            </div>
          </form>
          </div>
            <div className="col-md-3"></div>
      </div>
      </div>
    </>
  );
};

export default RegistrationForm;
