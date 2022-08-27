import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useDispatch, useSelector } from "react-redux";
import { update, remove } from "../../redux/userSlice";

export default function Update() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);

  const dispatch = useDispatch();

  console.log({ name });
  console.log({ email });

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(update({ name, email }));
  }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button onClick={() => dispatch(remove())} className="delete">
          Delete Account
        </button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button className="updateButton" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
