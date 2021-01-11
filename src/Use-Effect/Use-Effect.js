import React, { useState, useEffect } from "react";

export default function UseEffectExplore() {
  const [effectVar, setEffectVar] = useState("useEffect");
  const [stateVar, setstateVar] = useState("State");
  const [counter, setcounter] = useState(1);
  const [effectcounter, setEffectcounter] = useState(1);
  const [checkboxState, setCheckboxState] = useState(false);


  const handleStateButton = () => {
    setcounter((prevCount) => prevCount + 1);
    setstateVar("State Changed" + " " + counter);
    handleEffectButton();
  };

  const handleCheckBox = () => {
    setCheckboxState((prevCheckbox) => !prevCheckbox);
    setEffectVar("useEffect")
    setstateVar("State")
    setEffectcounter(1)
    setcounter(1)
  };

  const handleEffectButton = () => {
    if (!checkboxState) {
      setEffectcounter((prevCount) => prevCount + 1);
      setEffectVar("useEffect Called" + " " + effectcounter);
    } else {
      return setEffectVar("useEffect Called 1");
    }
  };


  return (
    <div className="container">
      <div className="row" style={{ display: "block" }}>
        <label className="checkbox-inline">
          <input type="checkbox" value="" onClick={handleCheckBox} />
          <span> </span>
          Use Effect Depedency Array Enable
        </label>
      </div>
      <p style={{ textAlign: "left" }}>
        <b>
          useEffect Hook called at every reder/ re-render. If we only want to
          run the useEffect hook only on specific variable state change then we
          must specify those variables in the dependecy array. Ex: useEffect is
          really cool when querying endpoints. In the initial query, we
          obviously need response. Later, if we are able to query the response
          with different paramters then its not needed to hit the API again.
          <br />
          **** We have return function in useEffect Hook which can be used to
          remove the listeners which we created previously to save app memory.
          <br />
          ***** If we place a eventlistener in the useEffect which is called even
          without calling the useEffect.
        </b>
        <br />
        <br />

        <div className="row" style={{ textAlign: "left" }}>
          <b> Note: </b> It is just to demonstrate how useEffect works with and
          without the Depedency Array. If the above checkbox is seleted that
          means the useEffect called only when the values specified in the
          dependency array Updated. Otherwise useEffect won't run. Without
          dependency array useEffect hook called end of every render/ re-render.
          Checkbox True is considered as empty dependency array []. So, After
          state change useEffect won't change.
        </div>
      </p>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={handleStateButton}>
            {stateVar}
          </button>
          <span> </span>
          <button className="btn btn-primary" onClick={handleEffectButton}>
            {effectVar}
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
