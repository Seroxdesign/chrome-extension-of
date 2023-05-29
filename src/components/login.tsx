import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../lib/firebase";
import React, { useState } from "react";

//@ts-ignore
export function SignInForm({ setUser, switchPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  console.log(email, password);
  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        switchPage(2)
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  return (
    <div className="flex items-center  flex-col w-full overflow-y-auto mb-50">
      <p className="text-2xl text-gray-100 mb-11 font-bold">Sign In</p>
      <form
        onSubmit={handleSubmit}
        className="w-5/6 flex justify-center flex-col"
      >
        <div>
          <label className="text-gray-200 text-sm pl-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>

        <div className="mt-5">
          <label className="text-gray-200 text-sm pl-3">Password</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <input className="hidden" id="toggle" type="checkbox" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(event) => handleChangePassword(event)}
              autoComplete="off"
            />
          </div>
        </div>

        <button
          disabled={email == "" && password == ""}
          onClick={handleSubmit}
        />
{/*         <button
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button> */}

        <div className="mt-28 w-full">
          <p className="text-xs text-center text-gray-200">
            Don't have an account?
          </p>
          <button
            onClick={() => switchPage(0)}
          >
            Sign Up
          </button>
        </div>
      </form>
      <br></br>
    </div>
  );
}