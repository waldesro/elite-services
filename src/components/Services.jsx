import { Card, CardContent } from "@/components/ui/Card";
import { useMemo } from "react";
import {ELITE} from "@/lib/brand";

import {
  Sparkles,
  Building2,
  Home,
  ClipboardCheck,
  Leaf,
  Scissors,
  Shovel,
  Trees,
} from "lucide-react";

export default function Services() {
  const services = useMemo(
    () => [
      // CLEANING
      {
        category: "Cleaning",
        title: "Office Cleaning",
        icon: Building2,
        accent: "blue",
        items: [
          "Restrooms, breakrooms, and common areas",
          "Trash & recycling + high-touch disinfection",
          "Flexible scheduling (weekly / nightly)",
        ],
      },
      {
        category: "Cleaning",
        title: "House Cleaning",
        icon: Home,
        accent: "blue",
        items: [
          "Kitchens, bathrooms, bedrooms, living areas",
          "Dusting, vacuuming, mopping, and detailing",
          "Recurring plans available",
        ],
      },
      {
        category: "Cleaning",
        title: "Deep Cleaning",
        icon: Sparkles,
        accent: "blue",
        items: [
          "Detail-focused top-to-bottom cleaning",
          "Baseboards, corners, and buildup areas",
          "Great for seasonal resets",
        ],
      },
      {
        category: "Cleaning",
        title: "Move In / Move Out",
        icon: ClipboardCheck,
        accent: "blue",
        items: [
          "Rental turnovers and listing prep",
          "Cabinets, appliances exterior, bathrooms detailed",
          "Final clean that feels “new”",
        ],
      },

      // LANDSCAPING
      {
        category: "Landscaping",
        title: "Lawn Mowing & Edging",
        icon: Leaf,
        accent: "green",
        items: [
          "Clean cuts + crisp edges",
          "Driveways/sidewalks blown off",
          "Scheduled weekly or biweekly",
        ],
      },
      {
        category: "Landscaping",
        title: "Trimming & Pruning",
        icon: Scissors,
        accent: "green",
        items: [
          "Shrubs, hedges, and light tree trimming",
          "Shape and tidy overgrowth",
          "Debris cleanup included",
        ],
      },
      {
        category: "Landscaping",
        title: "Mulch & Bed Refresh",
        icon: Shovel,
        accent: "green",
        items: [
          "Bed edging and refresh for curb appeal",
          "Mulch install and light weed pulling",
          "Clean finish around plants and borders",
        ],
      },
      {
        category: "Landscaping",
        title: "Seasonal Cleanup",
        icon: Trees,
        accent: "green",
        items: [
          "Leaf/branch pickup and haul-away options",
          "Spring or fall cleanups",
          "Final blow-down for a polished look",
        ],
      },

    ],
    []
  );

  const eliteBlue = "#14608D";
  const eliteGreen = "#448A35";

  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 p-8 sm:p-12 rounded-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-3 text-center text-slate-900" style={{ color: ELITE.blue }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              const isGreen = service.accent === "green";

              const accentColor = isGreen ? eliteGreen : eliteBlue;
              const badgeBg = isGreen ? "bg-[#448A35]/10" : "bg-[#14608D]/10";
              const badgeText = isGreen ? "text-[#448A35]" : "text-[#14608D]";

              return (
                <Card key={service.title} className="text-center p-6">
                  <CardContent>
                    {/* Category badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeBg} ${badgeText}`}
                      >
                        {service.category}
                      </span>
                    </div>

                    <Icon
                      className="mx-auto"
                      size={40}
                      style={{ color: accentColor }}
                    />

                    <h3 className="text-xl font-semibold mt-4 mb-3 text-slate-900">
                      {service.title}
                    </h3>

                    <ul className="space-y-1 text-sm text-slate-700">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-left"
                        >
                          <span
                            className="mt-1 h-1.5 w-1.5 flex-none rounded-full"
                            style={{ backgroundColor: accentColor }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
