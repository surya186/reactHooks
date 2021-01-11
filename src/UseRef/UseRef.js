import React, { useRef } from "react";

export default function UseRef() {
  const inputRender = useRef();
  const startFocus = () => {
    inputRender.current.focus();
  };

  return (
    <div>
      <p style={{ textAlign: "left" }}>
        <b>
          Refs are similar to State but unlike state Refs won't cause the
          component to Re-render. useRef returns an object like{" "}
          {"{current: default_value}"}
        </b>{" "}
        <br />
        Refs are not only useful for accessing DOM elements but can also be used
        to persist values between renders without causing re-render. <br />
        In class components, we can use class variables to persist value between
        renders but In functional components, we need to use Refs, if we are not
        using State. <br />
        In General, Refs can also be used to reference the JSX elements. That
        is, the below input filed is attached to Ref when we click on the focus
        button the foucs will come to that input field without casuing Re-render
        the entire component. That is best use-case.
      </p>
      <p style={{ textAlign: "left", color: "red" }}>
        Warning: We should not use the useRef to update the values such updating
        the input field with a some value Since it won't update the state of
        that particular variable.
      </p>
      <input
        ref={inputRender}
        style={{ marginBottom: "10px" }}
        type="text"
        className="form-control"
      />
      <button className="btn btn-primary" onClick={startFocus}>
        Focus
      </button>
    </div>
  );
}
