import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Home } from "./components/home";
import { SignIn } from "./components/signin";
import { SignUp } from "./components/signup";
// import ErrorPage from "./pages/Error";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
</Router> );
}