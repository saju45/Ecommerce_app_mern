import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[80%] md:w-[60%] lg:w-[40%] p-12 shadow-2xl rounded flex flex-col items-center justify-center">
        <div className="text-2xl flex flex-col lg:flex-row gap-2 text-center">
          <h1 className="font-bold">Welcome!</h1>
          <span>Signup as a new user</span>
        </div>
        <form className="flex flex-col w-[100%] mt-8">
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
            />
          </div>
          <div className="flex mt-4 ">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-2 rounded"
            >
              Sign Up
            </button>
          </div>
        </form>
        <h4 className="mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 hover:font-semibold"
          >
            Login
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Signup;
