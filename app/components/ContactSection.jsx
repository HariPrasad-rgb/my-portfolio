'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending...')

    emailjs
      .send(
        'service_xsei95m',      // Replace with your EmailJS service ID
        'template_40i1l9j',     // Replace with your template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'SVQ43aDWsuwZSL2HV'       // Replace with your public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!')
          setFormData({ name: '', email: '', message: '' })
        },
        (error) => {
          console.error('EmailJS error:', error)
          setStatus('Failed to send message. Please try again later.')
        }
      )
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#0f172a] text-white">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Let’s Connect</h2>
        <p className="text-slate-400 mt-2">Have a question or just want to say hi? Drop me a message.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700"
      >
        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-slate-900/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-slate-900/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-slate-900/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 px-4 rounded-md font-semibold"
        >
          Send Message
        </motion.button>

        {status && <p className="text-center text-sm text-purple-300 mt-4">{status}</p>}
      </form>
    </section>
  )
}
