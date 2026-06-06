import { useId } from "react";

function Radio({
  boolean = false,
  label,
  radioBooleanLabel,
  important = "false",
  radioLabel,
}) {
  const id = useId();
  return (
    <>
      {!boolean && (
        <div>
          <p className="text-violet-600 text-[12.5px]">
            {radioLabel}{" "}
            <span className="text-red-500">{important ? "*" : ""}</span>
          </p>
          <div className="flex items-center gap-x-2.5">
            <input type="radio" name="" id={id} />
            <label htmlFor={id}>{label}</label>
          </div>
        </div>
      )}
      {boolean && (
        <div>
          <p className="text-slate-900 text-[12.5px] font-semibold">
            {radioBooleanLabel}{" "}
            <span className="text-red-500">{important ? "*" : ""}</span>
          </p>
          <div className="text-black flex gap-x-4 mt-2">
            <div className="flex items-center gap-x-2.5 ">
              <input type="radio" name="b" id="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex items-center gap-x-2.5">
              <input type="radio" name="b" id="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Radio;
