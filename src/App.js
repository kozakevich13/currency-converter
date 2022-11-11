import "./App.css";
import Converter from "./components/Converter";
import Header from "./components/header/Header";

export default function App() {
 
  return (
    <div className="App">
      <Header/>
      <Converter/>
    </div>
  );
}
