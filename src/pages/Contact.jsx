import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sharathm6667@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-[var(--space-dark)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6 font-mono">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="neuromorphic p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-[var(--cyber-blue)] mb-6 font-mono">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full neuromorphic-inset bg-transparent text-white px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full neuromorphic-inset bg-transparent text-white px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full neuromorphic-inset bg-transparent text-white px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)]"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full neuromorphic-inset bg-transparent text-white px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)] resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full neuromorphic text-white font-semibold glow-effect hover:glow-effect transition-all duration-300 px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="neuromorphic p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-[var(--cyber-pink)] mb-6 font-mono">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:sharathm6667@gmail.com"
                  className="flex items-center space-x-4 hover:bg-white hover:bg-opacity-10 p-3 rounded-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 neuromorphic-inset rounded-full flex items-center justify-center">
                    <Mail className="text-[var(--cyber-blue)]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300 hover:text-[var(--cyber-blue)] transition-colors">
                      sharathm6667@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+919380624311"
                  className="flex items-center space-x-4 hover:bg-white hover:bg-opacity-10 p-3 rounded-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 neuromorphic-inset rounded-full flex items-center justify-center">
                    <Phone className="text-[var(--cyber-pink)]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300 hover:text-[var(--cyber-pink)] transition-colors">+91 9380624311</p>
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/PSzCao9NBmYGiDodA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-white hover:bg-opacity-10 p-3 rounded-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 neuromorphic-inset rounded-full flex items-center justify-center">
                    <MapPin className="text-[var(--cyber-purple)]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300 hover:text-[var(--cyber-purple)] transition-colors">Tiptur, India</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="neuromorphic p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-[var(--cyber-green)] mb-6 font-mono">Let's Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/sharath-m-3926b9341/" className="neuromorphic-inset p-4 rounded-xl text-center hover:bg-[var(--cyber-blue)] hover:bg-opacity-20 transition-all duration-300">
                  <Linkedin className="text-2xl text-[var(--cyber-blue)] mb-2 mx-auto" size={24} />
                  <p className="text-sm text-gray-300">LinkedIn</p>
                </a>
                <a href="https://github.com/SharathKumar-M" className="neuromorphic-inset p-4 rounded-xl text-center hover:bg-[var(--cyber-pink)] hover:bg-opacity-20 transition-all duration-300">
                  <Github className="text-2xl text-[var(--cyber-pink)] mb-2 mx-auto" size={24} />
                  <p className="text-sm text-gray-300">GitHub</p>
                </a>
                <a href="https://www.instagram.com/sharath_m17/" className="neuromorphic-inset p-4 rounded-xl text-center hover:bg-[var(--cyber-purple)] hover:bg-opacity-20 transition-all duration-300">
                  <Instagram className="text-2xl text-[var(--cyber-purple)] mb-2 mx-auto" size={24} />
                  <p className="text-sm text-gray-300">Instagram</p>
                </a>
                <a href="#" className="neuromorphic-inset p-4 rounded-xl text-center hover:bg-[var(--cyber-green)] hover:bg-opacity-20 transition-all duration-300">
                  <Twitter className="text-2xl text-[var(--cyber-green)] mb-2 mx-auto" size={24} />
                  <p className="text-sm text-gray-300">Twitter</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
