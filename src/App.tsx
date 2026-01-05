// App.jsx
import { Routes, Route } from "react-router-dom";

import { MainPage } from "@/pages/mainpage";
import { EntryPage } from "@/pages/entry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/home" element={<MainPage />} />
    </Routes>
  );
}

export default App;
