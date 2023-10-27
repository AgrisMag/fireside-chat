import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignInPage } from "./pages/SignInPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ChatPage } from "./pages/chat/ChatPage";
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
              <SignInPage />
            </LandingPage>
          }
        />
        <Route
          path="/signup"
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
