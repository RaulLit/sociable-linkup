import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  };
  return (
    <div className="page">
      <div>
        <h1>Sign In</h1>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  );
};
