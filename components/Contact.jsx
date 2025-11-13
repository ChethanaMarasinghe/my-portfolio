"use client";
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

export default function Contact({ email, phone, location }) {
  const mailto = `mailto:${email}?subject=Portfolio Contact&body=Hi Chethana,`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-sky-50/80 to-emerald-50/80 dark:from-slate-800/80 dark:to-slate-900/60 p-8 shadow-lg">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 mb-4">
          <FiMessageCircle className="text-white text-2xl" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
          Let's Work Together
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          Ready to discuss internships, collaborations, or freelance opportunities. 
          Let's build something amazing together!
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* Email Card */}
        <a
          className="group relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
          href={mailto}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-sky-500"></div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/20 to-sky-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FiMail className="text-emerald-600 text-xl" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
            <p className="text-sky-700 dark:text-sky-400 font-medium break-words">{email}</p>
            <span className="mt-3 text-xs text-slate-500 dark:text-slate-400 group-hover:text-sky-600 transition-colors">
              Click to send email
            </span>
          </div>
        </a>

        {/* Phone Card */}
        <a
          className="group relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
          href={`tel:${phone.replace(/\s+/g, "")}`}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-500"></div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FiPhone className="text-sky-600 text-xl" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
            <p className="text-slate-800 dark:text-slate-200 font-medium">{phone}</p>
            <span className="mt-3 text-xs text-slate-500 dark:text-slate-400 group-hover:text-sky-600 transition-colors">
              Click to call
            </span>
          </div>
        </a>

        {/* Location Card */}
        <div className="group relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FiMapPin className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
            <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{location}</p>
            <span className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Kegalle, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="text-center border-t border-slate-200 dark:border-slate-700 pt-8">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Prefer to connect socially?
          </h3>
          <SocialLinks
            links={{ 
              email, 
              github: undefined, 
              linkedin: undefined, 
              behance: undefined 
            }}
            variant="icons"
            size={28}
            className="flex justify-center gap-6"
          />
        </div>

        <a
          href={mailto}
          className="btn-shimmer inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 px-8 py-4 text-white font-semibold hover:from-sky-500 hover:to-emerald-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <FiSend className="text-lg" />
          Send me an Email
          <FiSend className="text-lg rotate-180" />
        </a>
        
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          I typically respond within 24 hours
        </p>
      </div>
    </div>
  );
}