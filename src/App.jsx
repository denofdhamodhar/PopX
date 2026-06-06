import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center font-Montserrat">
      <div className="bg-slate-100 shadow-xl border shadow-slate-300 max-w-74 330b:max-w-xs 360b:max-w-84  w-full my-4 min-h-screen overflow-y-hidden rounded-3xl text-white ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
