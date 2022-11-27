import React, { useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase.config";

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");

        firebaseAuth.onAuthStateChanged((useCred) => {
          if (userCred) {
            useCred.getIdToken().then((token) => {
              console.log(token);
            });

            navigate("/", { replace: true });
          } else {
            setAuth(false);
            navigate("/login");
          }
        });
      }
    });
  };

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "true") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute justify-center items-center bg-blackOverlay inset-0 flex p-4">
        <div className="w-full md:w-350 p-4 bg-slate-500 shadow-2xl rounded-md backdrop-blur-md flex flex-col justify-center items-center">
          <div
            className="flex justify-center items-center bg-slate-400 gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-slate-300 hover:shadow-md ease-in-out transition-all"
            onClick={loginWithGoogle}
          >
            <FcGoogle size={35} />
            Sign in with google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
