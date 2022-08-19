import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import List from "./Component/List";
import PhotoList from "./Component/PhotoList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/photos" element={<PhotoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
