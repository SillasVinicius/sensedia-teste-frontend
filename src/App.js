import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}