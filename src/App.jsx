import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-Montserrat lg:min-h-screen">
      <div className="bg-slate-100 shadow-xl border shadow-slate-300 max-w-74 330b:max-w-xs 360b:max-w-84  w-full my-4 min-h-[85vh] sm:min-h-[90vh] overflow-y-hidden h-full rounded-3xl text-white flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
