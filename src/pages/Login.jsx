import { Link } from "react-router-dom";
import Button from "../components/Button";
import FieldsetInput from "../components/FieldsetInput";
import { useEffect, useState } from "react";

function Login() {
  const [name, setName] = useState("user");
  const [email, setEmail] = useState("user@gmail.com")

  useEffect(() => {
    localStorage.setItem("email", email)
  }, [email])

  return (
    <div className="min-h-[85vh] sm:min-h-[90vh] flex flex-col p-4 w-full">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-xl xl:text-2xl text-black font-bold mt-4">
            Signing to your <br /> PopX account
          </h1>
          <Link to="/">
            <i className="fa-solid fa-house fa-lg text-violet-600 hover:text-violet-400 mr-5"></i>
          </Link>
        </div>
        <div>
          <p className="pt-2.5 font-medium text-slate-600 leading-6.5">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
          </p>
        </div>
        <form  className="mt-5.5">
          <FieldsetInput
            name="Email address"
            type="email"
            placeholder="Enter email address"
            important={true}
            className="mb-2.5"
            onChange={(e) => {
              setEmail(e.target.value)
              let result = e.target.value.replace(/@.*/, '').toLowerCase();
              setName(result)
            }}
          />
          <FieldsetInput
            name="Password"
            type="password"
            placeholder="Enter password"
            important={true}
            className="mb-2.5"
          />
          <Link to={`/account/${name}`}>
            <Button
              className="hover:bg-violet-500 text-sm"
              name="Login"
              btnColor="bg-violet-600"
              btnTextColor="text-white"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
