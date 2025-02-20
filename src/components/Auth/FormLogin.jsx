import { useState } from "react";
import { useLogin } from "./useLogin";

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault();

         login({email, password})
    };

  return (
      <form onSubmit={handleSubmit} className="bg-white p-10 px-20 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center mb-10">Login</h2>
          <div className="">
              <label htmlFor="email" className="block text-xl font-semibold">Email</label>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b focus:outline-none w-full border-indigo-600 p-1"
                  required
              />
          </div>
          <div className="mt-5">
              <label htmlFor="password" className="block text-xl font-semibold">Password</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b w-full focus:outline-none border-indigo-600 p-1"
                  required
              />
          </div>
          <div className="mt-6">
              <button
                  type="submit"
                  className="w-full cursor-pointer bg-indigo-600 bg-gradient-to-tl from-purple-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                  Login
              </button>
              <p className="max-w-60 text-xs mt-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
      </form>
  )
}

export default FormLogin