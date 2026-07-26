import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, ChevronDown, Award, FileText, 
  Star, ArrowRight, UserCheck, Compass, Target
} from "lucide-react";
import { Link } from "wouter";
import { themeConfig } from "../theme.config";

const LOGO_STRIP = [
  { name: "NABL (Under Process)", icon: ShieldCheck, label: "ISO/IEC 17025 Scope" },
  { name: "ISO 9001:2018", icon: Award, label: "Quality System Certified" },
  { name: "MPCB Approved", icon: FileText, label: "Consent to Operate" },
  { name: "ASTM & FCO Standards", icon: UserCheck, label: "Regulatory Compliance" }
];

const STATS = [
  { value: "GC-MS & AAS", label: "Sophisticated Instruments" },
  { value: "24 Yrs", label: "MD's Chemical Field Experience" },
  { value: "2025", label: "Establishment Year" }
];

const VALUES = [
  {
    title: "Accuracy",
    desc: "Scientific precision is our cornerstone. We verify every sample with absolute diligence and high-fidelity testing methodologies.",
    img: "/val-trust.png"
  },
  {
    title: "Integrity",
    desc: "Ethical reporting and compliance. We deliver unbiased, confidential, and reliable testing data to every client.",
    img: "/val-adaptability.png"
  },
  {
    title: "Speed",
    desc: "State-of-the-art analytical equipment and automated testing protocols that provide rapid turnaround times without compromising accuracy.",
    img: "/val-speed.png"
  }
];

const INFRASTRUCTURE = [
  {
    title: "Advanced Chemical & Instrumental Analysis Laboratory",
    content: "Equipped with state-of-the-art instruments like Gas Chromatography-Mass Spectrometry (GC-MS), Atomic Absorption Spectroscopy (AAS), UV-Vis Spectroscopy, and Fourier-Transform Infrared Spectroscopy (FTIR). Our laboratory provides precise qualitative and quantitative assessment of chemicals, polymers, silicones, and raw materials."
  },
  {
    title: "Water Quality & Environmental Compliance Testing",
    content: "Specialized testing facility for industrial effluent, agricultural water, and drinking water. We conduct analysis in accordance with MPCB norms, IS 10500 standards, and international pharmacopeias (BP, USP, IP) to ensure environmental safety and statutory compliance."
  },
  {
    title: "Agrochemical Formulation & Fertilizer Verification",
    content: "Dedicated testing zone for analyzing water-soluble fertilizers, bio-fertilizers, organic biostimulants, and crop protection chemicals. Tests are conducted according to the Fertiliser Control Order (FCO-1985) and the Agrochemicals Act to verify active ingredients, purity, and trace contaminants."
  }
];

const TESTIMONIALS = [
  {
    name: "Dr. Amit Deshmukh",
    location: "Polymer Chemist, Pune",
    crop: "Silicone Testing",
    rating: 5,
    quote: "Agrishield Labs च्या GC-MS आणि विस्कोसिटी विश्लेषणाने आम्हाला आमची निर्यात गुणवत्ता सुधारण्यास मदत केली. अचूक आणि जलद रिपोर्ट.",
    quoteen: "Agrishield Labs' GC-MS and viscosity analysis helped us improve our export quality. Accurate and fast reports."
  },
  {
    name: "Snehal Patil",
    location: "Compliance Manager, Chakan",
    crop: "Water Quality Testing",
    rating: 5,
    quote: "आम्ही दर आठवड्याला सांडपाणी तपासणीसाठी Agrishield Labs वर अवलंबून असतो. MPCB मानकांनुसार त्यांचे रिपोर्ट नेहमी वेळेवर मिळतात.",
    quoteen: "We rely on Agrishield Labs for weekly wastewater testing. Their reports are always on time according to MPCB standards."
  },
  {
    name: "Ramesh Shinde",
    location: "Agrochemical Producer, Nashik",
    crop: "NPK Fertilizer Analysis",
    rating: 5,
    quote: "त्यांचे FCO-1985 खत विश्लेषण अत्यंत विश्वसनीय आहे. यामुळे आमच्या बॅच रिलीजच्या प्रक्रियेला गती मिळाली.",
    quoteen: "Their FCO-1985 fertilizer analysis is highly reliable. It accelerated our batch release process."
  }
];

export default function About() {
  const [openAccord, setOpenAccord] = useState<number | null>(0);

  const toggleAccord = (index: number) => {
    setOpenAccord(openAccord === index ? null : index);
  };

  return (
    <div className="w-full bg-white pb-24 text-gray-900 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12">

        {/* ── HERO SECTION ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-7">
            {/* Red Line + About Us Label */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-[3px] bg-[#b91c1c] shrink-0" />
              <span className="text-[20px] font-bold text-[#b91c1c] uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            {/* Main Welcome Title */}
            <h1 className="text-[36px] md:text-[48px] lg:text-[54px] font-extrabold text-gray-900 leading-[1.1] mb-3 tracking-tight">
              Welcome to {themeConfig.legalName}
            </h1>

            {/* Subtitle */}
            <div className="text-[18px] md:text-[22px] font-bold text-[#1a3a6e] mb-8">
              Chemical &amp; Water testing laboratory in Pune
            </div>

            <p className="text-[15.5px] md:text-[17px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Agrishield Labs Pvt. Ltd. is an ISO 9001 certified chemical testing laboratory (with NABL accreditation under process) located in the Kuruli Industrial Area (near Chakan, Pune, Maharashtra). We offer a comprehensive suite of analytical services including sophisticated <strong>analytical chemistry</strong> (GC-MS, HPLC, FTIR, AAS), high-precision <strong>material testing</strong> of polymers, powders, and metals per ASTM and FCO standards, comprehensive <strong>environmental analysis</strong> (drinking water, effluents, and air quality per MPCB norms), agricultural <strong>soil testing</strong> for nutrient profiling, regulatory <strong>pharmaceutical testing</strong> (drug assay, purity, and stability per FDA/ICH guidelines), toxicological <strong>safety assessments</strong> of consumer and industrial materials, and bespoke <strong>custom analysis</strong> and method development for unique research challenges.
            </p>

            <Link href="/contact">
              <span className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/95 text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors cursor-pointer shadow-lg hover:shadow-xl shadow-primary/10">
                Contact Our Laboratory <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative shadow-2xl border border-gray-100 bg-gray-50">
              <img
                src="/company-building.png"
                alt="Agrishield Labs testing facility in Pune"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* ── LOGO STRIP ──────────────────────────────────────── */}
        <div className="border-t border-b border-gray-100 py-8 mb-24">
          <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest text-center mb-6">
            Official Accreditations &amp; Scope
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
            {LOGO_STRIP.map((logo) => (
              <div key={logo.name} className="flex items-center gap-3 justify-center">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <logo.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-gray-800 leading-none mb-1">{logo.name}</h4>
                  <p className="text-[10.5px] font-semibold text-gray-400 leading-none">{logo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DRIVEN BY INNOVATION SECTION ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-6 lg:order-2">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Laboratory Overview
            </span>
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-gray-900 leading-[1.1] mb-6">
              Reputation Built on Quality &amp; Scientific Credibility
            </h2>
             <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
              Established in 2025, Agrishield Labs Pvt. Ltd. operates as a specialized testing facility within the Agrishield® group of companies. The laboratory features ISO 9001:2018 certification (with NABL accreditation under process) for chemical testing, featuring state-of-the-art spectroscopy and chromatography instrumentation alongside MPCB environmental consent parameters.
            </p>
            <Link href="/products">
              <span className="inline-flex items-center gap-1.5 text-[15px] font-bold text-primary hover:underline cursor-pointer group">
                Browse Full Testing Scope <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="relative">
              {/* Highlight image card */}
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] max-w-[420px] mx-auto relative shadow-xl border border-gray-100 bg-white">
                <img
                  src="/iso-certificate.png"
                  alt="Agrishield ISO 9001 Certification Document"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS ROW ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 border-t border-b border-gray-100 py-12 text-center bg-gray-50/50 rounded-3xl px-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`px-4 ${i !== 2 ? "md:border-r border-gray-100" : ""}`}>
              <div className="text-[40px] md:text-[48px] font-extrabold text-primary leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-[13.5px] font-bold text-gray-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── VISION & MISSION ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-primary/[0.02] border border-primary/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center">
              <Compass className="w-8 h-8 text-primary/30" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full" /> Our Vision
            </h3>
            <p className="text-[14.5px] text-gray-600 leading-relaxed">
              To provide world-class chemical testing and analytical services, supporting industries in verifying product quality, safety, and compliance with national and international standards.
            </p>
          </div>
          <div className="bg-primary/[0.02] border border-primary/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center">
              <Target className="w-8 h-8 text-primary/30" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full" /> Our Mission
            </h3>
            <p className="text-[14.5px] text-gray-600 leading-relaxed">
              To deliver precise, rapid, and scientifically rigorous testing solutions for agrochemicals, industrial chemicals, and water quality through continuous investment in cutting-edge instrumentation and professional expertise.
            </p>
          </div>
        </div>

        {/* ── OUR CORE VALUES ─────────────────────────────────── */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-16 justify-start">
            <div className="w-16 h-[3px] bg-[#b91c1c] shrink-0" />
            <span className="text-[20px] font-bold text-[#b91c1c] uppercase tracking-wider">
              Our Values
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {VALUES.map((val) => (
              <div 
                key={val.title}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <img
                    src={val.img}
                    alt={val.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-gray-900 mb-4">
                  {val.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-gray-500">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── INFRASTRUCTURE & ACCORDIONS ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative shadow-xl border border-gray-100">
              <img
                src="/company-lab.png"
                alt="Agrishield Labs testing equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[12px] font-semibold text-white">
                Quality Control Lab &amp; Spectroscopy Section
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Infrastructure
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight mb-8">
              Advanced Analytical &amp; Testing Standards
            </h2>

            {/* Accordion List */}
            <div className="space-y-4">
              {INFRASTRUCTURE.map((item, index) => {
                const isOpen = openAccord === index;
                return (
                  <div 
                    key={item.title}
                    className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:border-gray-200 transition-all"
                  >
                    <button
                      onClick={() => toggleAccord(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-[15.5px] font-bold text-gray-900">{item.title}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-1 text-[13.5px] text-gray-500 leading-relaxed border-t border-gray-50 bg-gray-50/30">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── DIRECTORS & LEADERSHIP SECTION ─────────────────── */}
        <div className="bg-[#f4f6f9] rounded-[40px] p-8 md:p-14 mb-24">
          <div className="mb-14 text-center md:text-left">
            <span className="text-[12px] font-bold text-[#b91c1c] tracking-widest uppercase mb-3 block">
              Leadership
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight">
              Our Directors
            </h2>
          </div>

          <div className="space-y-20">
            {/* Dr. Shantishwar Patil */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-[15.5px] text-gray-700 leading-relaxed font-medium mb-8">
                  " I believe in reinforcing scientific credibility, precision, and regulatory compliance to support both agricultural development and industrial manufacturing. By establishing Agrishield Labs, we bridge the gap between chemical production and quality assurance, ensuring that every raw material and finished product matches strict national and international standards. Our laboratory (with NABL accreditation under process) operates under our core philosophy: 'Verify with Precision, Deliver with Trust.' "
                </p>
                <div>
                  <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1a3a6e] leading-tight mb-1">
                    Dr. Shantishwar Patil
                  </h3>
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wide">
                    Managing Director
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/3] mr-4 mb-4">
                  {/* Red backdrop offset */}
                  <div className="absolute inset-0 bg-[#b91c1c] rounded-2xl translate-x-3 translate-y-3" />
                  {/* Image card */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-150 bg-white">
                    <img
                      src="/director-shantishwar.png"
                      alt="Dr. Shantishwar Patil, Managing Director of Agrishield Labs Pvt. Ltd."
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mrs. Pratibha Patil */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-gray-200/60 pt-16">
              <div className="lg:col-span-7 lg:order-2 flex flex-col justify-center">
                <p className="text-[15.5px] text-gray-700 leading-relaxed font-medium mb-8">
                  " I always bind to maintain the neat and clean environment of company, To support the Positive thinking and hard work employees. Also continuously maintaining the professional and family culture in the organisation that is 'Not I, Say We' from top to bottom of employees. "
                </p>
                <div>
                  <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1a3a6e] leading-tight mb-1">
                    Mrs. Pratibha Patil
                  </h3>
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wide">
                    HRD Director
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/3] mr-4 mb-4">
                  {/* Red backdrop offset */}
                  <div className="absolute inset-0 bg-[#b91c1c] rounded-2xl translate-x-3 translate-y-3" />
                  {/* Image card */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-150 bg-white">
                    <img
                      src="/mrs-pratibha-patil.png"
                      alt="Mrs. Pratibha Patil, HRD Director of Agrishield Labs Pvt. Ltd."
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS SECTION ────────────────────────────── */}
        <div className="border-t border-gray-100 pt-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Client Testimonials
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-none">
              Trusted by Industries in Pune &amp; Beyond
            </h2>
            <p className="text-[15px] text-gray-500 mt-4 leading-relaxed">
              Read how chemical manufacturers, water utilities, and agrochemical producers experience our analytical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.name}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: test.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Marathi quote */}
                  <blockquote className="text-[14.5px] font-medium text-gray-800 leading-relaxed italic mb-3">
                    "{test.quote}"
                  </blockquote>
                  
                  {/* English quote */}
                  <p className="text-[12.5px] text-gray-500 leading-relaxed mb-6">
                    "{test.quoteen}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[14px]">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-extrabold text-gray-900 leading-none mb-1">{test.name}</h4>
                    <p className="text-[11px] font-semibold text-gray-400 leading-none">{test.location} · {test.crop}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
