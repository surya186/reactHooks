import React, { useState } from "react";
import UseContextDemo from "./UseContextDemo";

export const ThemeContext = React.createContext();

export default function ThemeSetter() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Change Theme
        </button>
        <UseContextDemo />
        <br />
        <p style={{ textAlign: "left" }}>
          Everything inside the Context Provider have access to the props of
          that Context. Even the childern of those components can also have
          access to the context props. This can be mostly useful in setting the
          theme of the app. Since theme needs to be updated to all the
          components from top level to all the way bottom. <br />
          In class components, It is needed to use the{" "}
          <code> {"<TestContext.consumer></TestContext.consumer>"} </code> to
          access the context props Whereas In functional components, It can be
          done using the useContext Hook.
          <br /> We can get the props of the context directly from the
          useContext Hook. Ex: <code>const isDarkTheme = useContext(TestContext);</code>
          <br />
          <code>
            {"<TestContext.Provider>"} <br />
            {"<component1 />"}
            <br />
            {"<component2 />"}
            <br />
            {"<component3 />"}
            <br />
            {"</TestContext.Provider>"}
          </code>
        </p>
      </ThemeContext.Provider>
    </>
  );
}
