import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SigninPage } from "./pages/SignInPage";
import { SignupPage } from "./pages/SignupPage";
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
              <SigninPage />
            </LandingPage>
          }
        />
        <Route
          path="/signup"
          element={
            <LandingPage>
              <SignupPage />
            </LandingPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
