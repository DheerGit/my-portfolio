import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xvgqrkyo", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    setSending(false);
    if (res.ok) {
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    } else {
      alert("There was an error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      {/* Header */}
      <div className="flex items-center justify-center mb-12">
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
        <span className="mx-4 px-8 py-2 bg-indigo-700 rounded-full text-white font-extrabold uppercase tracking-wide shadow-lg">
          Contact
        </span>
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-l from-transparent via-indigo-700 to-transparent" />
      </div>
<div className="flex flex-col md:flex-row gap-8">
    {/* Animated Contact Form */}
      <form
        className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h4 className="text-white text-xl font-semibold mb-4">Send a message</h4>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-black/20 text-white border border-transparent focus:border-yellow-400 outline-none transition-all duration-300 placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-black/20 text-white border border-transparent focus:border-yellow-400 outline-none transition-all duration-300 placeholder-gray-400"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-black/20 text-white border border-transparent focus:border-yellow-400 outline-none transition-all duration-300 placeholder-gray-400 resize-none"
          rows={4}
        />
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-indigo-700 text-white font-semibold hover:bg-yellow-400 hover:text-indigo-900 shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
        {sent && (
          <div className="mt-4 text-green-400 font-semibold text-center animate-pulse">
            Thank you! Your message has been sent.
          </div>
        )}
      </form>
      {/* Glass Card */}
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center space-y-6 mb-12">
        <h3 className="text-2xl font-semibold text-white">Let’s work together!</h3>
        <p className="text-gray-200">Have a project or opportunity in mind? Reach out via email or connect on socials below.</p>
        <div className="flex flex-col items-center space-y-4 mt-4 text-gray-300">
          <a href="mailto:dpamnani@asu.edu" className="flex items-center space-x-2 hover:text-yellow-400 transition" aria-label="Email">
            <FaEnvelope />
            <span>dpamnani@asu.edu</span>
          </a>
          <a href="tel:+16028079382" className="flex items-center space-x-2 hover:text-yellow-400 transition" aria-label="Phone">
            <FaPhone />
            <span>+1 602-807-9382</span>
          </a>
        </div>
        <div className="flex justify-center space-x-6 text-3xl text-indigo-400 mt-6">
          <a href="https://www.linkedin.com/in/dheerajpamnani" className="hover:text-yellow-400 transition" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/DheerGit" className="hover:text-yellow-400 transition" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.instagram.com/dheerajpamnani_" className="hover:text-yellow-400 transition" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <div className="text-gray-400 text-sm mt-2">Based in Tempe, AZ (MST, UTC-7)</div>
      </div>
    </div>
    </section>
  );
}