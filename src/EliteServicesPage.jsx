import { useState } from "react";
import { ELITE } from "@/lib/Brand";

// ✅ Update this path to wherever you store the Elite logo
import logo from "@/assets/transparent-logo.png";

import GalleryCarousel from "@/components/GalleryCarousel";
import Services from "@/components/Services"; // <-- Make sure this is the Elite Services version
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

/** Edit these later */
const BRAND = {
    name: "Elite Services",
    tagline: "Cleaning • Landscaping",
    phoneDisplay: "(314) 000-0000",
    phoneTel: "+13140000000",
    email: "youremail@domain.com",
    serviceAreas: ["Columbia", "Jefferson"],
};

export default function EliteServicesPage() {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div
            className="
    min-h-screen w-full text-gray-900 relative
    bg-[url('/images/background.png')]
    bg-center bg-no-repeat bg-cover bg-fixed"
        >
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur shadow-md px-4 py-3 border-b border-slate-200">
                <div className="mx-auto max-w-6xl flex items-center justify-between flex-wrap sm:flex-nowrap gap-3 sm:gap-6">
                    {/* Logo */}
                    <img
                        src={logo}
                        alt={`${BRAND.name} logo`}
                        className="h-14 sm:h-16 md:h-16 w-auto object-contain"
                    />

                    <div className="flex flex-col items-end sm:flex-row sm:items-center sm:ml-auto gap-2 sm:gap-4">
                        {/* Contact Button */}
                        <Button
                            variant="primary"
                            className="
                px-5 py-2 rounded-full shadow-md hover:shadow-lg
                transition-transform duration-200 transform hover:scale-105 active:scale-100
              "
                            onClick={() => setContactOpen(true)}
                        >
                            Contact Us
                        </Button>

                        {/* Phone CTA */}
                        <a
                            href={`tel:${BRAND.phoneTel}`}
                            className="
                flex items-center text-sm font-medium transition-all duration-200
                px-4 py-2 rounded-full shadow-sm hover:scale-105 active:scale-100
                bg-white border border-slate-200
                hover:bg-[#14608D]/10
                text-[#14608D]
              "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                style={{ color: ELITE.blue }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.27 1.1a2 2 0 01-.45 1.84L7.21 9.79a16.06 16.06 0 007 7l2.34-2.34a2 2 0 011.84-.45l1.1.27A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.06 21 3 14.94 3 7V5z"
                                />
                            </svg>
                            {BRAND.phoneDisplay}
                        </a>
                    </div>
                </div>
            </header>

            <div className="pt-24 sm:pt-24" />

            {/* HERO */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 p-10 sm:p-14 rounded-2xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                                style={{ color: ELITE.blue }}
                            >
                                Cleaning & Landscaping Services
                            </h1>

                            <p className="mt-6 text-lg sm:text-xl text-slate-700">
                                Professional cleaning for offices and homes, plus landscaping to keep your property looking sharp year-round.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" >
                                <Button
                                    variant="primary"
                                    className="px-8 py-3 text-lg rounded-xl shadow-lg transition duration-200"
                                    onClick={() => setContactOpen(true)}
                                >
                                    Request a Free Estimate
                                </Button>
                            </div>

                            <div className="mt-8 text-sm text-slate-600">
                                Free estimates • Reliable scheduling • Respectful cleanup • Recurring plans available
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 p-8 sm:p-12 rounded-2xl">
                        <h2
                            className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-center"
                            style={{ color: ELITE.blue }}
                        >
                            Locally owned and service-driven
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg mb-4 text-justify text-gray-800">
                                {BRAND.name} provides dependable cleaning for homes and offices, plus landscaping services to keep properties
                                looking clean, polished, and well-maintained. Whether you need recurring service or a one-time refresh, we
                                focus on consistent quality.
                            </p>

                            <p className="text-lg mb-4 text-justify text-gray-800">
                                We treat every space with care—from detailed cleaning checklists and respectful workmanship, to leaving the
                                area neat at the end of each visit. Our goal is simple: deliver results you can be proud of and service you’d recommend.
                            </p>

                            <p className="text-lg mt-6 italic text-justify text-gray-700">
                                Our mission is excellence from beginning to end—accurate estimates, reliable scheduling, and a property that looks its best.
                            </p>

                            {/* Optional service area chips */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {BRAND.serviceAreas.map((a) => (
                                    <span
                                        key={a}
                                        className="rounded-full px-3 py-1 text-sm border border-slate-200 bg-white"
                                    >
                                        {a}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <Services />

            {/* Gallery */}
            <div className="py-20 px-4 max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm shadow-xl border rounded-2xl border-white/40 p-6 sm:p-10">
                    <GalleryCarousel title="Work Gallery" autoPlay autoPlayInterval={5000} />
                </div>
            </div>

            <div className="pt-10 sm:pt-14" />

            {/* Footer */}
            <footer className="bg-white py-6 text-center text-sm text-gray-500 border-t border-slate-200">
                {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </footer>

            {/* Modals */}
            <Modal open={contactOpen} title="Contact Us" onClose={() => setContactOpen(false)}>
                <ContactForm onSuccess={() => setContactOpen(false)} />
            </Modal>
        </div>
    );
}
