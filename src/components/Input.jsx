const Input = ({ labelText, labelClass, inputClass, inputType, inputId, inputHolder }) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <label className={labelClass} htmlFor={inputId}>{labelText}</label>
      <input
        className={inputClass}
        type={inputType}
        id={inputId}
        placeholder={inputHolder}
      />
    </div>
  );
};

export default Input;
