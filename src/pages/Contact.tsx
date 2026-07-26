import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { themeConfig } from "../theme.config";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData.entries());
    object.access_key = "28ca6348-1a33-4b31-a833-4519a4453046";
    object.subject = "New Testing Enquiry - Agrishield Labs Pvt. Ltd.";
    object.from_name = "Agrishield Labs Pvt. Ltd. Website Portal";

    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });
      const data = await response.json();
      if (data.success) {
        toast({ title: "Enquiry sent", description: "Our analytical team will respond within one working day." });
        e.currentTarget.reset();
      } else {
        toast({ title: "Submission failed", description: data.message || "Please try again later.", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Submission failed", description: "A network error occurred. Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-14">
        <h1 className="text-[36px] md:text-[52px] font-bold text-gray-900 leading-[1.1] mb-4 max-w-2xl">
          Testing enquiries, compliance reports — we're a call away.
        </h1>
        <p className="text-[15px] text-gray-500 mb-12 max-w-xl leading-relaxed">
          Share your sample details, required standards, and turnaround expectations. Our analytical team responds within one working day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-[16px] p-6 md:p-8 shadow-sm">
            <h2 className="text-[18px] font-semibold text-gray-900 mb-6">Request a test</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full name</label>
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                    data-testid="input-full-name"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Material / sample type</label>
                <input
                  name="sample_type"
                  placeholder="e.g. Silicone emulsion, wastewater, fertilizer"
                  className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                  data-testid="input-sample-type"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Testing requirements</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  placeholder="Describe the tests you need, applicable standards, and expected turnaround time..."
                  className="w-full px-4 py-3 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-[15px] rounded-[8px] transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                data-testid="btn-submit-enquiry"
              >
                {loading ? "Sending..." : "Submit enquiry"}
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Visit Us Card with interactive map */}
            <div 
              className="bg-gray-50 border border-transparent rounded-[16px] p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  {/* Custom Map SVG logo */}
                  <svg className="w-[18px] h-[18px] text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" y1="3" x2="9" y2="18" />
                    <line x1="15" y1="6" x2="15" y2="21" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Visit our laboratory</div>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {themeConfig.address.line1}, {themeConfig.address.line2},<br />
                    {themeConfig.address.highway},<br />
                    {themeConfig.address.region} - {themeConfig.address.postalCode}<br />
                    Maharashtra, {themeConfig.address.country}
                  </p>
                </div>
              </div>

              <div 
                className="mt-5 rounded-2xl overflow-hidden h-[300px] border border-gray-200/80 shadow-inner relative"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Agrishield%20Labs%20Pvt%20Ltd%20-%20Chemical%20Testing%20Laboratory&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a 
                  href="https://maps.google.com/maps?q=Agrishield+Labs+Pvt+Ltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-gray-800 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow border border-gray-150 transition-colors flex items-center gap-1"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="bg-gray-50 rounded-[16px] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-[18px] h-[18px] text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Call us</div>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {themeConfig.contactPhones.map((phone, i) => (
                      <span key={phone}>
                        <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:underline hover:text-primary transition-colors">{phone}</a>
                        {i < themeConfig.contactPhones.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Email us</div>
                  <p className="text-[14px] text-gray-600">
                    <a href={`mailto:${themeConfig.contactEmail}`} className="hover:underline">{themeConfig.contactEmail}</a>
                  </p>
                  {themeConfig.secondaryEmail && (
                    <p className="text-[14px] text-gray-600">
                      <a href={`mailto:${themeConfig.secondaryEmail}`} className="hover:underline">{themeConfig.secondaryEmail}</a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Business hours</div>
                  <p className="text-[14px] text-gray-600">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-[14px] text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
