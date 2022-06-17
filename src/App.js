import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import { Dashboard } from "./components/dashboard";
import { ErrorPage } from "./components/error-page";
import { Home } from "./components/home";
import { SignIn } from "./components/signin";
import { SignUp } from "./components/signup";
import { ProtectedRoute } from './private-router';
export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
</Router> );
}