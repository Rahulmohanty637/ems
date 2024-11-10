import React, { useState } from "react";

const Header = (props) => {
  // const [userName, setUserName] = useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const loggedOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold"> userName 🖐️</span>
      </h1>
      <button
        onClick={loggedOutUser}
        className="bg-red-600 text-lg font-medium px-5 py-2 rounded-md hover:bg-red-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
