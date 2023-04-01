import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mails from "./components/Mails";
import Menu from "./components/Menu";
import Panel from "./components/Panel";
import Compose from "./components/pages/Compose";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-Home-Bg h-screen font-Hanken-Grotesk">
        <Header />
        <div className="flex">
          <Menu />
          <Routes>
            <Route
             path="/"
             element={<Mails />}
            />
          </Routes>
          <Compose />
          <Panel />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
