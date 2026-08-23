import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { themeConfig } from "../theme.config";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt={themeConfig.shortName}
                className="w-auto object-contain"
                style={{ height: 72, maxWidth: 160 }}
              />
            </Link>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
              NABL (Under Process) &amp; ISO certified chemical testing laboratory in Pune. Verifying quality and compliance to national and international standards.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wider">Testing Services</h3>
            <ul className="space-y-3">
              {["Chemical Testing", "Fertilizers Testing", "Soil Testing", "Water & Effluents", "Agrochemical Assay", "Custom Analysis"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wider">Laboratory</h3>
            <ul className="space-y-3">
              {[
                { label: "Industries Served", href: "/solutions" },
                { label: "Accreditation", href: "/awards" },
                { label: "About Us", href: "/about" },
                { label: "Request Quote", href: "/contact" },
                { label: "Careers", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">

              {/* Address with pin icon */}
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="text-[12.5px] text-gray-500 leading-relaxed">
                  {themeConfig.address.line1}, {themeConfig.address.line2},<br />
                  {themeConfig.address.highway},<br />
                  {themeConfig.address.region} – {themeConfig.address.postalCode}<br />
                  Maharashtra, {themeConfig.address.country}
                </span>
              </li>

              {/* Map – always visible */}
              <li className="rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 150 }}>
                <iframe
                  src="https://maps.google.com/maps?q=Agrishield%20Labs%20Pvt%20Ltd%20-%20Chemical%20Testing%20Laboratory&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </li>

              {/* Phone numbers with call icon */}
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.68 5.68l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div className="text-[12.5px] text-gray-500 leading-relaxed space-y-0.5">
                  {themeConfig.contactPhones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="block hover:text-gray-900 transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              {/* Email with envelope icon */}
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <div className="text-[12.5px] text-gray-500 leading-relaxed space-y-0.5">
                  <a href={`mailto:${themeConfig.contactEmail}`} className="block hover:text-gray-900 transition-colors break-all">
                    {themeConfig.contactEmail}
                  </a>
                  {themeConfig.secondaryEmail && (
                    <a href={`mailto:${themeConfig.secondaryEmail}`} className="block hover:text-gray-900 transition-colors break-all">
                      {themeConfig.secondaryEmail}
                    </a>
                  )}
                </div>
              </li>

            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} {themeConfig.legalName} All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { Icon: Facebook, label: "Facebook", href: themeConfig.socials.facebookUrl || "https://www.facebook.com" },
              { Icon: Twitter, label: "Twitter", href: themeConfig.socials.twitterUrl || "https://twitter.com" },
              { Icon: Instagram, label: "Instagram", href: themeConfig.socials.instagramUrl || "https://www.instagram.com" },
              { Icon: Linkedin, label: "LinkedIn", href: themeConfig.socials.linkedinUrl || "https://www.linkedin.com" },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-400 hover:text-gray-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
