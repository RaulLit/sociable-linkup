import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <img src="./logo.png" height="50px" />
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        {!user ? (
          <li className="nav-item">
            <Link to="login">Register</Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="createpost">Create</Link>
          </li>
        )}
        {user && (
          <>
            <li className="nav-item user-details">
              <img
                src={user.photoURL}
                width="50px"
                height="50px"
                style={{ borderRadius: "50%" }}
              />
              <p>{user.displayName}</p>
            </li>
            <li className="nav-item">
              <button onClick={logout} className="btn">
                Log out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
