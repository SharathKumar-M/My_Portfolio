import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import Notification from "./ui/Notification";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [showNotification, setShowNotification] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setShowNotification(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="pt-28 pb-20 bg-[var(--space-dark)] min-h-screen relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 font-mono">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Let’s build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="neuromorphic p-6 sm:p-8 rounded-3xl h-fit w-full">
            <h3 className="text-2xl font-bold text-[var(--cyber-blue)] mb-6 font-mono text-center sm:text-left">
              Send Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "subject"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="w-full neuromorphic-inset bg-transparent text-white px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)] placeholder:text-gray-400"
                />
              ))}
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full neuromorphic-inset bg-transparent text-white px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)] resize-none placeholder:text-gray-400"
              ></textarea>
              <button
                type="submit"
                className="w-full neuromorphic text-white font-semibold glow-effect hover:glow-effect transition-all duration-300 px-4 py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Socials */}
          <div className="neuromorphic p-6 sm:p-8 rounded-3xl w-full h-fit space-y-6">
            <h3 className="text-2xl font-bold text-[var(--cyber-pink)] font-mono text-center sm:text-left">
              Contact Information
            </h3>
            <div className="space-y-5">
              <ContactItem
                href="mailto:sharathm6667@gmail.com"
                icon={<Mail className="text-[var(--cyber-blue)]" size={20} />}
                label="Email"
                value="sharathm6667@gmail.com"
                hoverColor="text-[var(--cyber-blue)]"
              />
              <ContactItem
                href="tel:+919380624311"
                icon={<Phone className="text-[var(--cyber-pink)]" size={20} />}
                label="Phone"
                value="+91 9380624311"
                hoverColor="text-[var(--cyber-pink)]"
              />
              <ContactItem
                href="https://maps.app.goo.gl/yYw83t3YkFFa9pwaA"
                icon={<MapPin className="text-[var(--cyber-purple)]" size={20} />}
                label="Location"
                value="Tiptur, India"
                hoverColor="text-[var(--cyber-purple)]"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 pt-4 flex-wrap">
              <SocialIcon
                href="https://www.linkedin.com/in/sharath-m-3926b9341/"
                icon={<Linkedin size={18} className="text-[var(--cyber-blue)]" />}
              />
              <SocialIcon
                href="https://github.com/SharathKumar-M"
                icon={<Github size={18} className="text-[var(--cyber-pink)]" />}
              />
              <SocialIcon
                href="https://www.instagram.com/sharath_m17/"
                icon={<Instagram size={18} className="text-[var(--cyber-purple)]" />}
              />
              <SocialIcon
                href="#"
                icon={<Twitter size={18} className="text-[var(--cyber-green)]" />}
              />
            </div>
          </div>
        </div>

        {showNotification && (
          <Notification
            type="success"
            title="Message Sent!"
            message="Thanks for reaching out. I’ll get back to you soon 🚀👨‍💻"
            onClose={() => setShowNotification(false)}
            duration={5000}
          />
        )}
      </div>
    </section>
  );
}

function ContactItem({ href, icon, label, value, hoverColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300"
    >
      <div className="w-12 h-12 neuromorphic-inset rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold">{label}</h4>
        <p className={`text-gray-300 hover:${hoverColor} transition-colors`}>{value}</p>
      </div>
    </a>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="neuromorphic-inset w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300"
    >
      {icon}
    </a>
  );
              }      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 font-mono">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Let’s build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="neuromorphic p-6 sm:p-8 rounded-3xl h-fit w-full">
            <h3 className="text-2xl font-bold text-[var(--cyber-blue)] mb-6 font-mono text-center sm:text-left">
              Send Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "subject"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="w-full neuromorphic-inset bg-transparent text-white px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)] placeholder:text-gray-400"
                />
              ))}
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full neuromorphic-inset bg-transparent text-white px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-[var(--cyber-blue)] resize-none placeholder:text-gray-400"
              ></textarea>
              <button
                type="submit"
                className="w-full neuromorphic text-white font-semibold glow-effect hover:glow-effect transition-all duration-300 px-4 py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Socials */}
          <div className="neuromorphic p-6 sm:p-8 rounded-3xl w-full h-fit space-y-6">
            <h3 className="text-2xl font-bold text-[var(--cyber-pink)] font-mono text-center sm:text-left">
              Contact Information
            </h3>
            <div className="space-y-5">
              <ContactItem
                href="mailto:sharathm6667@gmail.com"
                icon={<Mail className="text-[var(--cyber-blue)]" size={20} />}
                label="Email"
                value="sharathm6667@gmail.com"
                hoverColor="text-[var(--cyber-blue)]"
              />
              <ContactItem
                href="tel:+919380624311"
                icon={<Phone className="text-[var(--cyber-pink)]" size={20} />}
                label="Phone"
                value="+91 9380624311"
                hoverColor="text-[var(--cyber-pink)]"
              />
              <ContactItem
                href="https://maps.app.goo.gl/yYw83t3YkFFa9pwaA"
                icon={<MapPin className="text-[var(--cyber-purple)]" size={20} />}
                label="Location"
                value="Tiptur, India"
                hoverColor="text-[var(--cyber-purple)]"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 pt-4 flex-wrap">
              <SocialIcon
                href="https://www.linkedin.com/in/sharath-m-3926b9341/"
                icon={<Linkedin size={18} className="text-[var(--cyber-blue)]" />}
              />
              <SocialIcon
                href="https://github.com/SharathKumar-M"
                icon={<Github size={18} className="text-[var(--cyber-pink)]" />}
              />
              <SocialIcon
                href="https://www.instagram.com/sharath_m17/"
                icon={<Instagram size={18} className="text-[var(--cyber-purple)]" />}
              />
              <SocialIcon
                href="#"
                icon={<Twitter size={18} className="text-[var(--cyber-green)]" />}
              />
            </div>
          </div>
        </div>

        {showNotification && (
          <Notification
            type="success"
            title="Message Sent!"
            message="Thanks for reaching out. I’ll get back to you soon 🚀👨‍💻"
            onClose={() => setShowNotification(false)}
            duration={5000}
          />
        )}
      </div>
    </section>
  );
}

function ContactItem({ href, icon, label, value, hoverColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300"
    >
      <div className="w-12 h-12 neuromorphic-inset rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold">{label}</h4>
        <p className={`text-gray-300 hover:${hoverColor} transition-colors`}>{value}</p>
      </div>
    </a>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="neuromorphic-inset w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
