"use client";

import React, { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { experiences } from "../../data/mockData";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "discover-scuba-netrani",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const WHATSAPP_NUMBER = "919876543210";
  const formatMessageForWhatsApp = (data: typeof formData) => {
    const expTitle =
      experiences.find((exp) => exp.slug === data.experience)?.title ||
      data.experience;
    return `
New Booking Request from ${data.name}:

📝 Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Experience: ${expTitle}
- Date: ${data.date}
- Message: ${data.message || "None"}

Please confirm availability! 😊`;
  };

  const sendToWhatsApp = () => {
    const message = formatMessageForWhatsApp(formData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank"); // Opens in new tab; use '_self' to replace current page
  };

  // Send via email (opens user's default email client) – fully client-side
  const sendToEmail = (toEmail: string = "your-support@email.com") => {
    const subject = `New Booking Request from ${formData.name}`;
    const body = formatMessageForWhatsApp(formData); // Reuse the same formatted message
    const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    console.log("Booking Request:", formData);

    // For static sites: Use client-side methods only (no backend needed)
    sendToWhatsApp(); // Primary: Opens WhatsApp with pre-filled message
    // sendToEmail(); // Optional: Uncomment to also open email client (user sends manually)

    setSubmitted(true);
    setIsSending(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-4xl mb-6">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Request Sent!</h1>
        <p className="text-slate-300 max-w-md mb-8">
          Thank you, {formData.name}. We have received your booking request for
          Netrani Island. Our team will contact you within 24 hours to confirm
          availability and payment.
          <br />
          <br />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, following up on my booking for ${formData.date}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-400 hover:underline"
          >
            Message us on WhatsApp for quick updates
          </a>
        </p>
        <Button href="/" variant="primary">
          Back Home
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SectionTitle
        title="Book Your Dive"
        subtitle="Start your underwater adventure at Netrani Island."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Form */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">
                Email Address
              </label>
              <input
                required
                type="email"
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Experience
                </label>
                <select
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors appearance-none"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                >
                  {experiences.map((exp) => (
                    <option key={exp.slug} value={exp.slug}>
                      {exp.title}
                    </option>
                  ))}
                  <option value="custom">Other / Custom Package</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                placeholder="Any dietary restrictions, special requests, or medical concerns?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 text-lg"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Confirm Request"}
            </Button>
            <p className="text-xs text-center text-slate-500 mt-4">
              * No payment is taken now. We will confirm availability first.
              Your details will open in WhatsApp for quick sharing.
            </p>
          </form>
        </div>

        {/* Info Side */}
        <div className="space-y-8">
          <div className="bg-ocean-900/20 border border-ocean-500/20 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-4">
              Why Book With Us?
            </h3>
            <ul className="space-y-4">
              {[
                "100% Safety Record at Netrani",
                "Smallest Instructor-to-Student Ratio",
                "Complimentary Underwater Photos",
                "Full Refund on Cancellation (48hrs prior)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="text-teal-400">★</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Directly
            </h3>
            <p className="text-slate-400 mb-2">Prefer to talk to a human?</p>
            <p className="text-2xl font-bold text-white mb-6">
              +91 98765 43210
            </p>
            <p className="text-sm text-slate-500">
              Available 9:00 AM - 8:00 PM IST
              <br />
              WhatsApp available on the same number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
