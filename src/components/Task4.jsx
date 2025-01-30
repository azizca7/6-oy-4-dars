import React, { useState } from "react";

function Task4() {
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [error, setError] = useState("");

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const copied = [...inputs];
    copied[index].value = event.target.value;
    setInputs(copied);
    setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    let checkInput = false; 
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        
        checkInput = true;
      }
    });

    if (checkInput) {
      setError("Inputga biror nima yozing!"); 
      return; 
    }

    inputs.forEach((input, index) => {
      console.log(`Input ${index + 1}:`, input.value);
    });

    setInputs([{ value: "" }]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Dinamik Input Qo'shish</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
        
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <div className="mb-4" key={index}>
              <label
                htmlFor={`input-${index}`}
                className="block text-gray-700 font-bold mb-2"
              >
                Input {index + 1}
              </label>
              <input
                type="text"
                id={`input-${index}`}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={input.value}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
          ))}

          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2"
            onClick={handleAddInput}
          >
            Yana input qo'shish
          </button>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Qo'shish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Task4;
