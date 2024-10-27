import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + passsword);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-10">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-xl outline-none rounded-full border-2 border-emerald-400 bg-transparent px-2 py-2 placeholder:text-gray-600"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={passsword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="mt-3 text-xl outline-none rounded-full border-2 border-emerald-400 bg-transparent px-2 py-2 placeholder:text-gray-600"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="mt-7 text-white text-lg font-semibold outline-none rounded-full bg-emerald-600 hover:bg-emerald-800 px-8 py-2 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
