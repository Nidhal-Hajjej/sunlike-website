"use client"

import { useState } from "react"

export default function QuoteSection() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    description: "",
    company: "", // 🛡 honeypot
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    setLoading(false)

    if (data.success) {
      setSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        description: "",
        company: "",
      })
    } else {
      alert("Something went wrong.")
    }
  }

  return (
    <section id="quote" className="relative overflow-hidden bg-[#162447] text-white py-32">

      {/* BIG CURVED GRADIENT LEFT */}
      <div className="absolute -left-[500px] top-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-600 via-blue-800 to-black opacity-70"></div>
      <div className="absolute -left-[380px] top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-blue-400/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Power Your Future <br /> with Sunlike
          </h2>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="bg-transparent border-b border-white/40 focus:outline-none focus:border-blue-400 py-3"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="bg-transparent border-b border-white/40 focus:outline-none focus:border-blue-400 py-3"
            />
          </div>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full bg-transparent border-b border-white/40 focus:outline-none focus:border-blue-400 py-3"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-transparent border-b border-white/40 focus:outline-none focus:border-blue-400 py-3"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Phone"
              className="bg-transparent border-b border-white/40 focus:outline-none focus:border-blue-400 py-3"
            />
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            required
            rows={4}
            className="w-full bg-transparent border-b border-white/40 focus:outline-none focus:border-blue-400 py-3 resize-none"
          />

          {/* 🛡 HONEYPOT FIELD */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          <p className="text-xs text-white/60 leading-relaxed max-w-lg">
            By clicking &quot;Get a Quote,&quot; you authorize us to contact you regarding your solar project.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-10 py-4 rounded-xl font-semibold"
          >
            {loading ? "Sending..." : "Get a Quote"}
          </button>

          {success && (
            <p className="text-green-400 font-medium">
              ✅ Your request has been sent successfully.
            </p>
          )}

        </form>
      </div>
    </section>
  )
}
