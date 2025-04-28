"use client";

import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    host: "naatininja.com",
    type: "contact",
    created: new Date(),
  });

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      // Ensure collection is called on the db instance
      const colRef = collection(db, "webForms");
      const docRef = await addDoc(colRef, formData);
      console.log("Document written with ID: ", docRef.id);

      setSuccessMessage("Thank you! We will be in touch about the next steps.");

      // Optionally clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
        host: "naatininja.com",
        type: "contact",
        created: new Date(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      setErrorMessage("Failed to submit form. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <>
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-50 to-transparent rounded-full opacity-20 blur-3xl transform rotate-12" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-indigo-50 to-transparent rounded-full opacity-20 blur-3xl transform -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
                Contact Us
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e]">
                With Naati Ninja
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about NAATI CCL preparation? Our team is here to
              help you succeed.
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white py-16">
            <div className="container">
              <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg">
                <h2 className="text-3xl font-semibold text-center mb-6">
                  Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto m-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        disabled={loading}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    ></textarea>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] text-white font-bold py-2 rounded-md hover:from-[#0b8d8c] hover:to-[#0b8d8c] focus:outline-none focus:ring-2 focus:ring-green-800"
                    >
                      Submit
                    </button>
                    {/* Success message */}
                    {successMessage && (
                      <div className="text-green-600 mt-2">
                        {successMessage}
                      </div>
                    )}
                    {/* Error message */}
                    {errorMessage && (
                      <div className="text-red-600 mt-2">{errorMessage}</div>
                    )}
                  </div>
                </form>
              </div>
              <div className="justify-center text-center max-w-md mx-auto pb-5 mt-10">
                <p className="text-black mb-5">You can also reach us at:</p>
                <div className="flex justify-center text-center max-w-md mx-auto pb-5">
                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/people/Naati-Ninja/61569638377174/"
                    className="mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      style={{ color: "#1877f2" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  {/* Youtube Icon */}
                  <a
                    href="https://www.youtube.com/@NaatiNinja"
                    className="mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      style={{ color: "#ff0000" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  {/* Mail Icon */}
                  <a href="mailto:support@naatininja.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      style={{ color: "#000000" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.288 21H1.712c-.945.0-1.712-.767-1.712-1.712V5.712c0-.945.767-1.712 1.712-1.712h20.576C23.233 4 24 4.767 24 5.712v13.576c0 .945-.767 1.712-1.712 1.712zM12 14.914 2.658 8.431 2.638 20h18.684V8.431L12 14.914zM20.869 5H3.08L12 11.229S18.252 6.823 20.869 5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
