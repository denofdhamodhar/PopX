import { Link } from "react-router-dom";
import Button from "../components/Button";
import FieldsetInput from "../components/FieldsetInput";
import Radio from "../components/Radio";

function Signup() {
  return (
    <div className="h-screen flex flex-col p-4 w-full">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-xl xl:text-2xl text-black font-bold mt-4">
            Create your <br /> PopX account
          </h1>
          <Link to="/">
            <i className="fa-solid fa-house fa-lg text-violet-600 hover:text-violet-400 mr-5"></i>
          </Link>
        </div>
        <div className="mt-5">
          <FieldsetInput
            name="Full name"
            placeholder="Enter full name"
            important={true}
            className="mb-5"
          />
          <FieldsetInput
            name="Phone number"
            placeholder="9xxxxxxxxxx1"
            type="tel"
            important={true}
            className="mb-5"
          />
          <FieldsetInput
            name="Email address"
            type="email"
            placeholder="Enter email address"
            important={true}
            className="mb-5"
          />
          <FieldsetInput
            name="Password"
            type="password"
            placeholder="Enter password"
            important={true}
            className="mb-5"
          />
          <FieldsetInput
            name="Company name"
            placeholder="Enter company name"
            className="mb-5"
          />
          <Radio
            boolean={true}
            radioBooleanLabel="Are you an Agency?"
            important="true"
          />
        </div>
      </div>
      <div className="mt-auto text-black">
        <Link to="/login">
          <Button
            className="hover:bg-violet-500 text-sm"
            name="Create Account"
            btnColor="bg-violet-600"
            btnTextColor="text-white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
