/**
 * Premium Business Website Framework (PBWF)
 * Centralized Branding & Theme Configuration for Agrishield Labs Pvt. Ltd.
 */

export interface CompanyConfig {
  legalName: string;            // Legal entity name
  shortName: string;            // Conversational name
  tagline: string;              // Primary slogan
  establishmentYear: number;
  contactEmail: string;         // Primary mailbox
  secondaryEmail?: string;
  contactPhones: string[];      // Multiple support numbers
  address: {
    line1: string;
    line2: string;
    highway: string;
    region: string;
    postalCode: string;
    country: string;
  };
  socials: {
    whatsappNumber: string;    // International format e.g. "919021342901"
    facebookUrl?: string;
    twitterUrl?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage: string;
  };
  colors: {
    primary: string;           // Hex value
    secondary: string;
    accent: string;
  };
}

export const themeConfig: CompanyConfig = {
  legalName: "Agrishield Labs Pvt. Ltd.",
  shortName: "Agrishield Labs",
  tagline: "NABL (Under Process) & ISO 9001 Certified Analytical Testing Laboratory",
  establishmentYear: 2025,
  contactEmail: "service@agrishieldlabs.com",
  secondaryEmail: "info.agrishield@gmail.com",
  contactPhones: [
    "+91 93596 87781",
    "+91 79726 10839",
    "+91 90213 42901"
  ],
  address: {
    line1: "Plot No. 55",
    line2: "Gat No. 679, Behind Maruti Suzuki Showroom",
    highway: "Pune Nashik Highway, Kuruli",
    region: "Tal: Khed, Dist: Pune",
    postalCode: "410501",
    country: "India"
  },
  socials: {
    whatsappNumber: "919021342901",
    facebookUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com/agrishield.india/",
    linkedinUrl: "https://www.linkedin.com"
  },
  seo: {
    metaTitle: "Agrishield Labs Pvt. Ltd. | NABL (Under Process) Chemical & Water Testing Laboratory – Pune, India",
    metaDescription: "Agrishield Labs Pvt. Ltd. is an ISO 9001 certified laboratory in Pune, Maharashtra (NABL under process). We provide comprehensive chemical testing, water analysis (MPCB parameters), and agrochemical testing (FCO-1985).",
    keywords: [
      "Chemical Testing Laboratory",
      "NABL (Under Process) Lab",
      "Water Testing Pune",
      "Silicone Testing",
      "Agrochemical Analysis",
      "Polymer Testing",
      "MPCB Waste Water Testing",
      "FCO 1985 Testing",
      "Pune",
      "Maharashtra",
      "India"
    ],
    canonicalUrl: "https://agrishieldlabs.com/",
    ogImage: "https://agrishieldlabs.com/logo.png"
  },
  colors: {
    primary: "#1f7a3a", // Matches the premium green color token in CSS
    secondary: "#111827",
    accent: "#B45309"
  }
};
