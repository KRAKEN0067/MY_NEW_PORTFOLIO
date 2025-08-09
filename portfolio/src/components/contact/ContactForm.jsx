import React, { useState } from 'react';

const Contactform = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // replace with actual logic
    alert("Message sent!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16" id="contact">
      <h2 className="text-4xl font-bold mb-8 text-center text-white underline decoration-green-600">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 p-8 rounded-2xl shadow-lg">
        
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label htmlFor="name" className="text-green-700 mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="px-4 py-3 rounded-xl border border-green-600 focus:ring-2 focus:ring-green-600 placeholder-gray-500 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-green-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="px-4 py-3 rounded-xl border border-green-600 focus:ring-2 focus:ring-green-600 placeholder-gray-500 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-green-700 mb-2 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Type your message here..."
            className="px-4 py-3 rounded-xl border border-green-600 focus:ring-2 focus:ring-green-600 resize-none placeholder-gray-500 text-white"
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center sm:justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-transform duration-300 hover:scale-110"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* <div className='pt-8 flex justify-center'>
        <p className='text-green-600  text-sm sm:text-lg bg-gray-900 inline py-4 px-8 rounded-full hover:scale-110 transition-transform duration-400'>My Email: aryanbaakle@gmail.com</p>
      </div> */}
    </div>
  );
};

export default Contactform;
