import { Routes, Route, Navigate } from "react-router-dom";
import { Home, NotFound, SignIn, SignUp } from "./pages";
import { UseAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { isAuthorized, user, isLoading } = UseAuthContext();
  if (isLoading) return null;
  return (
    <div className="p-4 min-h-screen w-screen py-4 lg:py-8 bg-background flex flex-col items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={
            user || isAuthorized ? <Home /> : <Navigate to={"/sign-in"} />
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
