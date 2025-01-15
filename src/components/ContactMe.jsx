import React from "react";

const ContactMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-3xl w-full p-6 text-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Contact Me
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <p className="text-gray-100">Sylhet, Bangladesh</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-gray-100">rafsan.web.2022@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
