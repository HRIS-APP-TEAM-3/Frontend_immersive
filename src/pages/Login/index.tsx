import React from 'react';

const Login = () => {
  return (
    <div className="relative min-h-screen">
      {/* Lapisan latar belakang biru */}
      <div className="absolute inset-0 bg-blue-200"></div>

      {/* Gambar latar belakang */}
      <img
        src="./assets/BG.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Konten form login */}
      <div className="relative z-10 flex justify-center items-center h-screen">
        <form className="bg-transparent shadow-none rounded px-4 sm:px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
          {/* Logo */}
          <img
            src="./logo.png"
            alt="Logo HRIS"
            height='50px'
            width='200px'
            className="mx-auto mb-4"
          />

          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border-none bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border-none bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* Tombol Login */}
          <div className="flex items-center justify-center md:justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
