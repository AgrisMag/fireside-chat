import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ChatPage } from "./pages/ChatPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<ChatPage />} />
        <Route
          path="/"
          element={
            <LandingPage>
              <LoginPage />
            </LandingPage>
          }
        />
        <Route
          path="/register"
          element={
            <LandingPage>
              <RegisterPage />
            </LandingPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
