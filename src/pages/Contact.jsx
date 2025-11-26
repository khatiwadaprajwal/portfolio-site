import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError('');

    const serviceID = 'service_z6m0c9t';
    const templateID = 'template_fsi6ib3';
    const publicKey = 'KCm2zdKBTAyJzESus';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError('Failed to send message.');
      })
      .finally(() => {
        setSending(false);
      });
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'prajwalkhatiwada28@gmail.com', link: 'mailto:prajwalkhatiwada28@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+977 9824005179', link: 'tel:+9779824005179' },
    { icon: FiMapPin, label: 'Location', value: 'Lalitpur, Nepal', link: null },
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', url: 'https://github.com/khatiwadaprajwal', color: 'hover:text-green-600 dark:hover:text-green-400' },
    { icon: FiMail, label: 'Email', url: 'mailto:prajwalkhatiwada28@gmail.com', color: 'hover:text-green-600 dark:hover:text-green-400' }
  ];

  return (
    <div className={`py-8 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm currently seeking internship opportunities and open to discussing potential collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mb-8`}>
                I'm Prajwal Khatiwada, a backend developer passionate about building scalable APIs and learning new technologies. 
                I'm currently seeking internship opportunities to work on real-world projects and contribute to innovative teams.
              </p>
            </div>

            {/* Current Status */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Current Status</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Available for Internships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Learning React & Frontend</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Open to Collaborations</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Details</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className={`${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} transition-colors`}>
                          {info.value}
                        </a>
                      ) : (
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Social Links</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Message</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Have a project in mind or want to discuss opportunities? Feel free to reach out!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block mb-1 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input w-full" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-1 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input w-full" placeholder="Your email" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block mb-1 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-input w-full" placeholder="What's this about?" />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-1 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="form-input w-full resize-vertical" placeholder="Tell me about your project or opportunity..." />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <FiSend className="w-5 h-5" />
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
              </button>

              {sent && <p className="text-green-600 mt-3">Message sent successfully!</p>}
              {error && <p className="text-red-600 mt-3">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
