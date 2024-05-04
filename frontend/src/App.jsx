import { Routes, Route } from "react-router-dom";
import { Home, NotFound, SignIn, SignUp } from "./pages";

function App() {
  return (
    <div className="p-4 min-h-screen w-screen py-8 bg-background flex items-center justify-center">
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
