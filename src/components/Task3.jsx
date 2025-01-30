import React, { useState } from "react";

function Task3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Ism kiritilishi shart!");
      return;
    }

    if (!email.trim()) {
      setError("Email kiritilishi shart!");
      return;
    }

    if (message.length < 20) {
      setError("Xabar kamida 20 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    console.log("Ism:", name);
    console.log("Email:", email);
    console.log("Xabar:", message);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Ism
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Xabar
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Task3;
