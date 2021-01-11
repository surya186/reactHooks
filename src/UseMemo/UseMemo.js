import React, { useState } from "react";

export default function UseMemo() {
  const [master, setMaster] = useState("Run");
  const [slave, setSlave] = useState("Output");
  const [outputDisplay, setOutputDisplay] = useState("hidden");
  const [checkBox, setCheckBox] = useState(true);
  const [load, setLoad] = useState("hidden");

  const handleMaster = () => {
    setMaster("Run");
    setLoad("visible");
    if (checkBox) {
      setTimeout(() => {
        handleSlave();
      }, 1500);
    } else {
      handleSlave();
    }
  };

  const handleSlave = () => {
    setOutputDisplay("visible");
    setLoad("hidden");
    setSlave("Output");
  };

  const handleCheckBox = () => {
    setCheckBox((prevState) => !prevState);
    setMaster("Run");
    setOutputDisplay("hidden");
  };

  return (
    <div className="container">
      <div className="row" style={{ display: "block" }}>
        <label className="checkbox-inline">
          <input type="checkbox" onChange={handleCheckBox} />
          <span> </span>
          With useMemo
        </label>
      </div>
      <p style={{ textAlign: "left" }}>
        <b>
          useMemo Hook retuns Memorized value. That is, it caches the previous
          value if there are no changes in the given parameters. <br /> Ex: When
          we queried some ID and we trying to query the same ID again then the
          useMemo hook won't run agian instead gives the previously cached
          result. <br />
          ** Whenever if we want to update the object based on the referential
          equality in that case we can use useMemo hook.
        </b>
        <br />
        In some cases, we are querying huge database or querying a heavy
        computational function, it takes a more time. In those cases, To improve
        efficency of the App, we can run that functionality inside useMemo hook
        and control it with the dependecy array. <br />
        <br />
        The below example is just to demonstrate the performance of app with
        useMemo Hook. <b> After caching </b> the previous result.
      </p>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={handleMaster}>
            {master}
          </button>
          <span> </span>
          <br />
          <br />
          <p style={{ visibility: load }}> Loading . . . </p>
          <button
            className="btn btn-primary"
            style={{ visibility: outputDisplay }}
            onClick={handleSlave}
          >
            {slave}
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
