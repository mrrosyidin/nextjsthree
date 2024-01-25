"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import SetToken from "./SetToken";

type Data = {
  role: string;
  token: string;
};

export default function LoginRegisterModal() {
  const [isLogin, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setLogin(!isLogin);
  };

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);

    if (isLogin) {
      const response = await fetch(
        "https://laravel.roulete.tech/api/EarlyRegister/api/login",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        }
      );
      console.log(response);
      if (response.ok) {
        const responseData: Data = await response.json();
        console.log(responseData.role);
        SetToken(responseData.token);

        if (responseData.role === "admin") {
          router.push("/EarlyAccessTable");
        } else {
          router.push("/Dashboard/Client");
        }
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } else {
      const response = await fetch(
        `https://laravel.roulete.tech/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        }
      );
      console.log(response);
    }

    setModal(false);
    setIsMutating(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button onClick={handleChange} className="btn">
        Login
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal ">
        <div className="modal-box ">
          <div className="mb-4 text-center ">
            <h2 className="text-xl font-medium text-slate-700">
              {isLogin ? "Login" : "Registration"}
            </h2>
          </div>
          <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full input-bordered"
                placeholder="email"
              />

              <label className="label font-bold">password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full input-bordered"
                placeholder="password"
              />
            </div>
            <div>
              <button type="button" className="btn" onClick={handleChange}>
                Close!
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  {isLogin ? "Login" : "Register"}
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
          <div>
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <a href="#" onClick={handleToggle} className="toggle-link">
                {isLogin ? "Register" : "Login"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
