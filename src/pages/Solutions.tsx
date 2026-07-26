import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const SOLUTIONS = [
  {
    title: "Chemical & Industrial Analysis",
    subtitle: "Silicones, polymers & emulsions",
    desc: "Comprehensive testing of industrial chemicals including active content determination, emulsion stability, pH, conductivity, and purity verification — performed on GC-MS, AAS, and FTIR instrumentation.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop&q=85",
    tags: ["Silicone Emulsions", "Polymers", "Resins", "Oils"],
  },
  {
    title: "Water & Environmental Testing",
    subtitle: "Compliance & potability",
    desc: "Testing aligned with MPCB discharge norms, IS 10500 drinking water standards, and ASTM protocols. Heavy metal detection via AAS, BOD/COD measurement, and microbial screening.",
    img: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=500&fit=crop&q=85",
    tags: ["MPCB Norms", "IS 10500", "Effluent", "Process Water"],
  },
  {
    title: "Agrochemical Verification",
    subtitle: "FCO-1985 & regulatory panels",
    desc: "Total NPK content analysis, micronutrient chelation assays, pesticide residue screening, and complete FCO-1985 compliance panels for fertilizer and crop protection products.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop&q=85",
    tags: ["Fertilizers", "Pesticides", "Micronutrients", "Biostimulants"],
  },
  {
    title: "Custom R&D Protocols",
    subtitle: "Tailored analytical solutions",
    desc: "Customer-defined testing parameters for product development, quality benchmarking, batch release verification, and process optimization — designed in collaboration with your R&D team.",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop&q=85",
    tags: ["Formulation R&D", "Benchmarking", "Batch Release", "Method Development"],
  },
];

export default function Solutions() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12 pb-10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary tracking-wider uppercase mb-4">
            Industries & Capabilities
          </div>
          <h1 className="text-[32px] md:text-[44px] font-bold text-gray-900 leading-[1.1] mb-4">
            Analytical solutions for every industrial sector.
          </h1>
          <p className="text-[16px] text-gray-500 leading-relaxed">
            Our laboratory serves manufacturers, exporters, environmental agencies, and R&D teams — delivering precise, standards-compliant test reports that inform critical decisions.
          </p>
        </div>

        <div className="space-y-8">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 rounded-[20px] overflow-hidden"
              data-testid={`card-solution-${i}`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""} aspect-[16/10] md:aspect-auto`}>
                <img
                  src={sol.img}
                  alt={sol.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 260 }}
                />
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""} p-8 flex flex-col justify-center`}>
                <div className="text-[12px] font-semibold text-primary uppercase tracking-widest mb-2">{sol.subtitle}</div>
                <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-3">{sol.title}</h2>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{sol.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {sol.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[12px] font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:underline"
                >
                  View related tests <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="bg-[#f5f5f5] rounded-[20px] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-2">Need a custom testing protocol?</h3>
            <p className="text-[15px] text-gray-500">Our analytical team designs bespoke methodologies around your product and compliance requirements.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-colors"
            data-testid="btn-solutions-cta"
          >
            Talk to an analyst <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
