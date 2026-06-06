function Button({
  name,
  type = "",
  className,
  btnColor = "bg-black",
    btnTextColor = "text-white",
  ...props
}) {
  return (
      <button
          {...props}
      type={type}
      className={`${className} ${btnColor} ${btnTextColor} w-full py-2.5 font-semibold font-Montserrat text-center rounded-md`}
    >
      {name}
    </button>
  );
}

export default Button;
