import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import Swal from "sweetalert2";
import Button from "../../component/Button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://104.197.165.50/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res?.data?.data?.token;
        const role = res?.data?.data?.role;
        const id = res?.data?.data?.id;
        const division = res?.data?.data?.division;

        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        })
          .then((res) => {
            Cookie.set("role", role);
            Cookie.set("token", token);
            Cookie.set('id', id);
            Cookie.set('division', division);

            navigate("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-blue-200"></div>
      <img
        src="./assets/BG.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex justify-center items-center h-screen">
        <div className="bg-transparent shadow-none rounded px-8 pt-6 pb-8 mb-4">
          <img
            src="./logo.png"
            alt="Logo HRIS"
            height="50px"
            width="200px"
            className="mx-auto mb-4"
          />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border-none bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border-none bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              label="Login"
              classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleLogin()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
