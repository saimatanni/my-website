'use client'
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xbljjopa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <section className="py-16 text-white bg-black" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          Get in Touch
        </h2>
        <p className="mb-8">
          Feel free to reach out for any project or collaboration!
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid max-w-3xl grid-cols-1 gap-4 mx-auto md:grid-cols-2"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 text-white bg-gray-800 border border-gray-600 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 text-white bg-gray-800 border border-gray-600 rounded-lg"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="col-span-2 p-4 text-white bg-gray-800 border border-gray-600 rounded-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="col-span-2 p-4 text-white bg-gray-800 border border-gray-600 rounded-lg"
            required
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center col-span-2 py-3 text-white rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 hover:bg-orange-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="mr-2 loader"></span> // Custom loader
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
