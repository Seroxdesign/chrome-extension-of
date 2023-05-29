import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'

//@ts-ignore
export const Signup = ({ setUser, switchPage }) => {
  const auth = getAuth();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user created");
        console.log(userCredential);
        setUser(userCredential)
        switchPage(2)
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <button>Create Account</button>
      </form>
      <button onClick={() => switchPage(1)}>Login</button>
      <br></br>
    </div>
  )
}

