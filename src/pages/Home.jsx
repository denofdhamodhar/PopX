import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col justify-end w-full p-4 min-h-[80vh] sm:min-h-[90vh]">/
      <div className="mb-2">
        <h1 className="text-lg sm:text-xl xl:text-2xl text-black font-bold">
          Welcome to PopX
        </h1>
        <p className="py-2.5 font-medium text-slate-600 leading-snug">
          Lorem ipsum dolor sit amet
          <br />
          consectetur, adipisicing elit.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-3">
          <Link to="/signup">
            <Button
              className="hover:bg-violet-500 text-sm"
              name="Create Account"
              btnColor="bg-violet-600"
            />
          </Link>
          <Link to="/login">
            <Button
              className="hover:bg-violet-300 text-sm font-medium"
              name="Already Registered? Login"
              btnColor="bg-violet-400"
              btnTextColor="text-slate-900"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
