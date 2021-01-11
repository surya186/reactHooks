import "./App.css";
import RegistrationForm from "./Calc/Calculator";
import UseR from "./Use-Reducer/Use-R";
import UserRComplex from "./Use-Reducer/Use-R-complex";
import UseEffectExplore from "./Use-Effect/Use-Effect";
import UseMemo from "./UseMemo/UseMemo";
import UseRef from "./UseRef/UseRef";
import UseContextDemo from "./UseContext/UseContextDemo"
import ThemeSetter from './UseContext/ThemeContextCode'

function App() {
  return (
    <div className="App" style={{ backgroundColor: "aliceblue" }}>
      <h2 style={{ textDecoration: "underline", color: "cornflowerblue" }}>
        React Hooks at a glance
      </h2>
      <br />
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
      <hr />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h2>useEffect:</h2>
          <UseEffectExplore />
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h2>useMemo:</h2>
          <UseMemo />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <div className="container">
        <div className="row" style={{display:"grid"}}>
          <h2 style={{textAlign:"left"}}>useRef:</h2>
          <UseRef />

        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="container">
        <div className="row" style={{display:"grid"}}>
          <h2 style={{textAlign:"left"}}>useContext:</h2>
      
      </div>
      <ThemeSetter/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;
