import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
export default App;
