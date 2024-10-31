import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-[#0a1f44] text-[#fdfdfd]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Don't be shy! Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Address Point:</h3>
                <p>I'm Everywhere</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Email Me:</h3>
                <a href="mailto:paul2dev@gmail.com" className="text-[#ffc857] hover:underline">paul2devs@gmail.com</a>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Call Me:</h3>
                <a href="tel:+2347068578749" className="text-[#ffc857] hover:underline">+234 70 6857 8749</a>
              </div>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://wa.me/2347068578749" target="_blank" rel="noopener noreferrer" className="text-[#ffc857] hover:text-[#0077ff]">
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://twitter.com/techwhizkids" target="_blank" rel="noopener noreferrer" className="text-[#ffc857] hover:text-[#0077ff]">
                  <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com/in/paul2dev" target="_blank" rel="noopener noreferrer" className="text-[#ffc857] hover:text-[#0077ff]">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/paul2dev" target="_blank" rel="noopener noreferrer" className="text-[#ffc857] hover:text-[#0077ff]">
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="mt-2 text-sm">💬Reach out on WhatsApp for swift responses!</p> 
            </div>
            <div>
              {submitted ? (
                <div className="text-center">
                  <p className="text-xl mb-4">Thank you for your message!</p>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-[#3a3f5a] rounded-md shadow-sm focus:outline-none focus:ring-[#0077ff] focus:border-[#0077ff] bg-[#2b2d42] text-[#fdfdfd]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-[#3a3f5a] rounded-md shadow-sm focus:outline-none focus:ring-[#0077ff] focus:border-[#0077ff] bg-[#2b2d42] text-[#fdfdfd]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-[#3a3f5a] rounded-md shadow-sm focus:outline-none focus:ring-[#0077ff] focus:border-[#0077ff] bg-[#2b2d42] text-[#fdfdfd]"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#0077ff] text-[#fdfdfd] px-6 py-3 rounded-md hover:bg-[#ffc857] hover:text-[#0a1f44] transition-colors duration-300 flex items-center justify-center"
                    >
                      Send Message
                      <FaPaperPlane className="ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
