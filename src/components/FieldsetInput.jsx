import { useRef } from "react";

function FieldsetInput({ name, important = false, className, type = "text", placeholder, ...props }) {
  const ref = useRef(null)
  return (
    <fieldset onClick={() => ref.current.focus()} className={`${className} border border-slate-600 rounded-md pl-2.5 focus-within:border-violet-400 focus-within:border-2`}>
      <legend className="text-violet-600 text-[12.5px] font-semibold">
        <span className="mx-2">
          {name} <span className="text-red-500">{important ? "*" : ""}</span>
        </span>
      </legend>
      <input
        ref={ref}
        className="border-none w-full outline-0 py-1 mb-2 px-2.5 text-[12.5px] font-semibold text-slate-900"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </fieldset>
  );
}

export default FieldsetInput;
