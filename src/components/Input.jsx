import { useId } from "react";

function Input({
  label,
  important = false,
  placeholder,
  type = "text",
  className,
  props,
}) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className="ml-2 text-violet-600" htmlFor={id}>
          {label}
          <span className="text-red-500">{important ? "*" : ""}</span>
        </label>
      )}{" "}
            
    </div>
  );
}

export default Input;
