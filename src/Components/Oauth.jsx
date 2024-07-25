import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import { signInSuccess, signInFailure } from "../Redux/Slice/UserSlice";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Oauth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("https://blog-app-be-ps7i.onrender.com/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          profilePic: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("Token", data.token);
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <Button gradientDuoTone="purpleToPink" type="button" onClick={handleSubmit}>
      <AiFillGoogleCircle className="w-8 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

export default Oauth;
