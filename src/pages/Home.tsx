import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, FlaskConical, IndianRupee, Presentation } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────── */



const MAIN_SERVICES = [
  {
    title: "Environmental Analysis",
    desc: "Comprehensive water quality testing",
    img: "/environmental-analysis.jpg",
    highlight: false
  },
  {
    title: "Pharmaceutical Testing",
    desc: "Drug analysis, impurity profiling, and stability testing",
    img: "/pharma-testing.jpg",
    highlight: true
  },
  {
    title: "Safety Assessment",
    desc: "Toxicological evaluation and safety testing",
    img: "/safety-assessment.png",
    highlight: false
  }
];

const EXPERTISE_BULLETS = [
  { title: "Tailored Testing", desc: "We customize tests to meet your unique needs." },
  { title: "Hassle-Free Sampling", desc: "Trust our experts for precise on-site sampling." },
  { title: "Cost-Effective Analysis", desc: "Affordable options for meaningful results." },
  { title: "Consistent Reliability", desc: "We guarantee testing precision and result dependability." },
  { title: "Swift Reporting", desc: "Automated Lab management system gives quick reports for your timely corrective action." }
];

export default function Home() {
  const [activeOrb, setActiveOrb] = useState<"cost" | "testing" | "compliance">("cost");

  const orbitDetails = {
    cost: {
      title: "Cost Effective Analysis",
      desc: "Affordable options for meaningful results. We perform in-house test procedures for chemical identification in materials at reasonable rates."
    },
    testing: {
      title: "Accurate Testing & Assay",
      desc: "Leveraging state-of-the-art GC-MS, AAS, and FTIR instrumentation under strict NABL scope conditions for high-fidelity compliance."
    },
    compliance: {
      title: "Regulatory Compliance & Audits",
      desc: "Providing verified documentation for MPCB environmental consents, FCO-1985 guidelines, and international pharmacopeias (BP, USP, IP)."
    }
  };

  return (
    <div className="w-full bg-white">
      
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Layered Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/laboratory-hplc.jpg"
            alt="Agrishield Labs high-precision analytical chemistry laboratory background"
            className="w-full h-full object-cover opacity-35"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[13px] md:text-[15px] font-bold text-emerald-400 tracking-[0.15em] uppercase mb-4"
          >
            Welcome To Agrishield Labs Pvt Ltd
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] md:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6"
          >
            Leader in Testing and Auditing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] md:text-[20px] text-gray-300 max-w-3xl leading-relaxed mb-10"
          >
            Leading chemical testing laboratory delivering precise, dependable, and certified results for industries worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#1f7a3a] hover:bg-[#1a6631] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              data-testid="btn-hero-enquiry"
            >
              Enquiry Now
            </Link>
          </motion.div>
        </div>

        {/* Premium Wave Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* ── ABOUT US ──────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[14px] font-bold text-red-600 uppercase tracking-wider mb-2">About Us</p>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              We are the leading testing laboratory in Pune.
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              AGRISHIELD LABS PVT LTD is a branch of AGRISHIELD® Group of companies under the management of Dr. Shantishwar Patil. He has more than 25 years of vast experience in the chemical field. AGRISHIELD LABS PVT LTD is located in Pune District of Maharashtra State, in the Kuruli Industrial Area, Tal- Khed near the city of Chakan. It is well connected by road, rail & air.
            </p>

            {/* Accreditation Badges Row */}
            <div className="border-t border-gray-100 pt-6">
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-4">Accreditation & Approvals</p>
              <div className="mt-2">
                <img 
                  src="/accreditations-logos.png" 
                  alt="Accreditations & Approvals: FSSAI, NABL, APEDA, MOEFCC, ISO 14001 EMS, ISO 45001 OH&S, ISO 9001 QMS" 
                  className="w-full max-w-xl md:max-w-2xl h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&h=600&fit=crop&q=80"
              alt="Analytical chemists working on micro-filtration in a laboratory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

        </div>
      </section>

      {/* ── MAIN SERVICES ──────────────────────────────────────── */}
      <section className="px-6 py-20 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[38px] font-extrabold text-[#2a1b5c] tracking-tight mb-4"
          >
            Explore Our Main Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] md:text-[17px] text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced analytical services with cutting-edge technology and uncompromising accuracy. Your trusted partner in chemical analysis and quality assurance.
          </motion.p>
        </div>

        {/* Arch Cards Row */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MAIN_SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col justify-between rounded-[40px] p-6 shadow-lg border transition-all duration-500 hover:shadow-2xl ${
                service.highlight
                  ? "bg-slate-900 text-white border-slate-950 scale-105 z-10"
                  : "bg-white text-gray-900 border-gray-150"
              }`}
              data-testid={`card-service-arch-${idx}`}
            >
              <div>
                {/* Arch Top Shaped Image container */}
                <div className="relative aspect-[4/5] rounded-t-full overflow-hidden mb-6 shadow-inner">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                </div>
                <h3 className={`text-[20px] font-bold text-center mb-2 tracking-tight ${service.highlight ? "text-white" : "text-gray-900"}`}>
                  {service.title}
                </h3>
                <p className={`text-[13px] text-center leading-relaxed mb-6 ${service.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {service.desc}
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="/products"
                  className={`inline-flex items-center gap-1.5 font-bold text-[14px] px-6 py-2.5 rounded-full transition-all duration-300 ${
                    service.highlight
                      ? "bg-white hover:bg-gray-150 text-slate-900"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── OUR EXPERTISE ──────────────────────────────────────── */}
      <section className="relative px-6 py-24 overflow-hidden bg-gray-950">
        {/* Folliage background layer */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay z-0">
          <img
            src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=1200&h=800&fit=crop&q=80"
            alt="Blur plant pattern background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[14px] font-bold text-emerald-400 uppercase tracking-wider mb-2">Our Expertise</p>
            <h2 className="text-[32px] md:text-[42px] font-extrabold text-white tracking-tight leading-none mb-8">
              Precision, Safety, Trust
            </h2>
            
            {/* Diamond bullet points */}
            <div className="space-y-5 mb-10">
              {EXPERTISE_BULLETS.map((bullet) => (
                <div key={bullet.title} className="flex items-start gap-3">
                  <span className="text-orange-500 font-extrabold text-[16px] mt-0.5 shrink-0">◆</span>
                  <div>
                    <span className="font-extrabold text-white text-[15px]">{bullet.title}– </span>
                    <span className="text-gray-300 text-[14.5px] leading-relaxed">{bullet.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1f7a3a] hover:bg-[#1a6631] text-white font-bold text-[15px] px-8 py-3.5 rounded-full transition-all duration-300"
              data-testid="btn-expertise-enquiry"
            >
              Enquiry Now <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Interactive Orbit Diagram */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              
              {/* Central Circle */}
              <div className="relative w-[180px] h-[180px] rounded-full border-4 border-white/20 p-2 bg-gray-900 shadow-2xl z-10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=400&h=400&fit=crop&q=80"
                  alt="Hands holding green sprout"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Orbit Circle Border */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/20 scale-[0.8] pointer-events-none" />

              {/* ORB 1: Cost Effective (Top) */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                onClick={() => setActiveOrb("cost")}
                className={`absolute top-0 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border-2 cursor-pointer ${
                  activeOrb === "cost"
                    ? "bg-[#1f7a3a] border-emerald-400 text-white"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
                style={{ top: "0%", left: "calc(50% - 32px)" }}
                aria-label="Orbit cost parameter details"
              >
                <span className="font-extrabold text-[20px]">₹</span>
              </motion.button>

              {/* ORB 2: Accurate Testing (Bottom Left) */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                onClick={() => setActiveOrb("testing")}
                className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border-2 cursor-pointer ${
                  activeOrb === "testing"
                    ? "bg-[#1f7a3a] border-emerald-400 text-white"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
                style={{ bottom: "10%", left: "10%" }}
                aria-label="Orbit testing parameter details"
              >
                <FlaskConical className="w-6 h-6" />
              </motion.button>

              {/* ORB 3: Compliance & Audits (Bottom Right) */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                onClick={() => setActiveOrb("compliance")}
                className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border-2 cursor-pointer ${
                  activeOrb === "compliance"
                    ? "bg-[#1f7a3a] border-emerald-400 text-white"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
                style={{ bottom: "10%", right: "10%" }}
                aria-label="Orbit compliance parameter details"
              >
                <Presentation className="w-6 h-6" />
              </motion.button>

            </div>

            {/* Orbit detail card box */}
            <motion.div
              key={activeOrb}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-[420px] bg-white/5 border border-white/10 rounded-2xl p-6 mt-8 text-center"
            >
              <h4 className="text-[16px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                {orbitDetails[activeOrb].title}
              </h4>
              <p className="text-[13.5px] text-gray-300 leading-relaxed">
                {orbitDetails[activeOrb].desc}
              </p>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
