import Nav from "./Components/Nav";
import TextForm from "./Components/TextForm";
import "./App.css";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //Dark and Light Mode
  const [mode, setMode] = useState("light");
  function Mode() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#162234";
      showAlert("Dark Mode", "success");
    }
  }

  //Alert:->
  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    let obj = {
      mssg: message,
      type: type,
    };
    setAlert(obj);
    setTimeout(function () {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        <Nav Name={"TextUtils"} mode={mode} ModeFunc={Mode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading={"Enter the text to analyze below"}
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
