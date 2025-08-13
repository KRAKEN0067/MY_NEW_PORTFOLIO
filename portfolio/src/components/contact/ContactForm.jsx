import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(form); // replace with actual logic
    alert("Message sent successfully! I'll get back to you soon.");
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      placeholder: 'Your full name',
      icon: FaUser,
      type: 'text',
      required: true,
      colSpan: 'col-span-1 md:col-span-2'
    },
    {
      name: 'email',
      label: 'Email Address',
      placeholder: 'you@example.com',
      icon: FaEnvelope,
      type: 'email',
      required: true,
      colSpan: 'col-span-1'
    },
    {
      name: 'message',
      label: 'Message',
      placeholder: 'Tell me about your project or how I can help...',
      icon: FaComment,
      type: 'textarea',
      required: true,
      colSpan: 'col-span-1 md:col-span-2'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        {/* Form Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl"></div>
        
        <div className="relative z-10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formFields.map((field) => (
              <div key={field.name} className={`flex flex-col ${field.colSpan}`}>
                <label htmlFor={field.name} className="flex items-center text-green-400 mb-3 font-medium text-sm">
                  <field.icon className="mr-2 text-green-500" size={16} />
                  {field.label}
                  {field.required && <span className="text-red-400 ml-1">*</span>}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    rows="6"
                    value={form[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 placeholder-gray-500 text-white resize-none transition-all duration-300 hover:border-gray-500 focus:outline-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 placeholder-gray-500 text-white transition-all duration-300 hover:border-gray-500 focus:outline-none"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </span>
              
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Form Note */}
          <p className="text-center text-gray-500 text-sm mt-6">
            I typically respond within 24 hours. Looking forward to hearing from you!
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
