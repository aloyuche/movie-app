import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Login } from "./components";
import { getAuth } from "firebase/auth";

import { app } from "./config/firebase.config";

function App() {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((useCred) => {
      if (useCred) {
        useCred.getIdToken().then((token) => {
          console.log(token);
        });
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="w-screen h-screen flex bg-primary justify-center items-center ">
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
