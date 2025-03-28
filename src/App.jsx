import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Studio from "./pages/Studio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </>
  );
}

export default App;
