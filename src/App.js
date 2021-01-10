import "./App.css";
import RegistrationForm from "./Calc/Calculator";
import UseR from "./Use-Reducer/Use-R";
import UserRComplex from "./Use-Reducer/Use-R-complex";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h2>useState:</h2>
          <RegistrationForm />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h2>useReducer - simple usage:</h2>
          <UseR />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h2>useReducer - complex usage:</h2>
          <UserRComplex />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
