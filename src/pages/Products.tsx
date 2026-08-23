import { Link } from "wouter";
import { motion } from "framer-motion";
import { FlaskConical, Layers, Globe2, ShieldAlert, Sparkles, Binary, ChevronRight, Sprout, TestTube } from "lucide-react";

const SERVICES = [
  {
    id: "analytical-chemistry",
    title: "Analytical Chemistry",
    desc: "Comprehensive chemical composition analysis using state-of-the-art instrumentation, including GC-MS, HPLC, FTIR, UV-Vis Spectroscopy, Flame Photometer, Atomic Absorption Spectroscopy (AAS) and many more regular lab instruments for precise qualitative and quantitative analysis.",
    img: "/analytical-chemistry.png",
    Icon: FlaskConical,
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "material-testing",
    title: "Material Testing",
    desc: "High-precision testing and analysis of raw materials, products, and industrial samples. Physical and chemical properties evaluation of materials, polymers, Powders, metals, and composites following ASTM procedures for all chemicals and FCO 1985 standards for fertilizers.",
    img: "/material-testing.png",
    Icon: Layers,
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "environmental-analysis",
    title: "Environmental Analysis",
    desc: "Comprehensive water quality testing, including effluent water testing, DM (demineralised) water testing, purified water testing, and drinking water testing. We also conduct environmental monitoring and contamination assessment for air and soil samples with regulatory compliance reporting.",
    img: "/environmental-analysis.jpg",
    Icon: Globe2,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "soil-testing",
    title: "Soil Testing",
    desc: "Comprehensive agricultural and industrial soil testing. We analyze pH levels, electrical conductivity (EC), organic carbon, major nutrients (N, P, K), secondary and micronutrients (Zn, Fe, Mn, Cu, B), cation exchange capacity (CEC), and heavy metal contamination to optimize soil health and maximize crop yields.",
    img: "/soil-testing.jpg",
    Icon: Sprout,
    color: "from-amber-600 to-emerald-700"
  },
  {
    id: "fertilizers-testing",
    title: "Fertilizers Testing",
    desc: "Assay and quality testing of chemical, organic, water-soluble, biostimulants, and micronutrient fertilizers in strict compliance with FCO 1985 (Fertilizer Control Order) specifications. Evaluation of active nutrient content, moisture, purity, biuret content, and heavy metal impurities.",
    img: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=800&h=500&fit=crop&q=85",
    Icon: TestTube,
    color: "from-green-600 to-emerald-700"
  },
  {
    id: "pharmaceutical-testing",
    title: "Pharmaceutical Testing",
    desc: "Drug analysis, impurity profiling, and stability testing for pharmaceutical compounds following FDA and ICH guidelines.",
    img: "/pharma-testing.jpg",
    Icon: Binary,
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "safety-assessment",
    title: "Safety Assessment",
    desc: "Toxicological evaluation and safety testing for consumer products, chemicals, and for the industrial materials.",
    img: "/safety-assessment.png",
    Icon: ShieldAlert,
    color: "from-red-500 to-rose-600"
  },
  {
    id: "custom-analysis",
    title: "Custom Analysis",
    desc: "Tailored testing solutions and method development for unique analytical challenges and specialised research requirements.",
    img: "/custom-analysis.png",
    Icon: Sparkles,
    color: "from-teal-500 to-cyan-600"
  }
];

export default function Products() {
  return (
    <div className="w-full bg-white pb-24">
      {/* Header Banner */}
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12px] font-extrabold text-[#1f7a3a] tracking-[0.2em] uppercase mb-3"
          >
            Analytical Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[32px] md:text-[48px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4"
          >
            Our Testing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[15px] md:text-[17px] text-gray-500 leading-relaxed"
          >
            NABL (Under Process) and ISO certified laboratory delivering high-precision analytical solutions across major industries.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex flex-col justify-between bg-white border border-gray-150 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              data-testid={`card-service-${s.id}`}
            >
              <div>
                {/* Image Showcase */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Glassmorphic Icon Overlay */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-800">
                    <s.Icon className="w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#1f7a3a] transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(s.title)}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-[#1f7a3a] text-white font-bold text-[13px] py-3 rounded-full transition-all duration-300 shadow-sm"
                  data-testid={`btn-enquiry-${s.id}`}
                >
                  Enquiry Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
