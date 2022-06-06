import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
