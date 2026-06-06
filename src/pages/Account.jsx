import { Link, useNavigate, useParams } from "react-router-dom";
import profile from "../assets/images/profile.png";
import Button from "../components/Button";
function Account() {
  let params = useParams();
  let email = localStorage.getItem("email");
  let navigate = useNavigate()
  function logoutFn() {
    localStorage.removeItem("email");
    navigate("/")
  }

  return (
    <div className="text-black min-h-screen flex flex-col justify-start">
      <div className="py-4 bg-white flex justify-between items-center">
        <h1 className="text:sm pl-4 sm:text-lg">Account Settings</h1>
        <Link to="/">
          <i className="fa-solid fa-house fa-lg text-violet-600 hover:text-violet-400 mr-5"></i>
        </Link>
      </div>
      <div className="py-6">
        <div className="flex gap-x-4 pb-4 px-4">
          <div>
            <img src={profile} alt={params.username} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-slate-800 capitalize text-sm">
              {params.username}
            </h2>
            <h2 className="text-slate-600 text-sm">{email}</h2>
          </div>
        </div>
        <div className="border-b-2 border-dashed border-slate-200 px-4 pb-4">
          <p className="text-[13px] text-slate-700 text-justify text-wrap wrap-break-word break-all font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            totam deleniti ex esse voluptatem provident consectetur omnis
            praesentium beatae laborum.
          </p>
        </div>
      </div>
        <div className="px-4 mb-4 mt-auto">
          <Button
            name="Logout"
            className="text-sm hover:bg-red-500"
            btnColor="bg-red-600"
            onClick={logoutFn}
          />
        </div>
    </div>
  );
}

export default Account;
