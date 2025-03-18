import { useState } from "react";

export function InputDefault() {

  const [focused, setFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const handleChange = (event) => {
    setHasContent(event.target.value.length > 0);
  };

  return (
    <div className="relative">
      <input
        type="text"
        id="input"
        className={`peer w-full p-3 border-2 rounded-md bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 ease-in-out ${focused || hasContent ? "border-primary" : "border-gray-300"}`}
        placeholder=" "
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      />
      {/* Conditionally render the label */}
      {!hasContent && !focused && (
        <label
          htmlFor="input"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 ease-in-out"
        >
          Your Label
        </label>
      )}
    </div>
  );
}

export default InputDefault;