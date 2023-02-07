import { BrowserRouter as Router } from "react-router-dom";
import { Forms } from "../../../features/components/forms/forms";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
      </div>
      <Router>
        <Forms></Forms>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
