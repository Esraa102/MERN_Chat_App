import { Routes, Route } from "react-router-dom";
import { Home, NotFound, SignIn, SignUp } from "./pages";

function App() {
  return (
    <div className="p-4 h-screen w-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
