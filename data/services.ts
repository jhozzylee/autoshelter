export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  includes: string[];
}

export const services: Service[] = [
  // --- Maintenance ---
  {
    slug: "oil-change",
    number: "01",
    title: "Oil Change",
    shortDescription: "Keep your engine lubricated, protected, and performing efficiently.",
    description: "Regular oil changes help protect your engine, improve performance, and support the long-term reliability of your vehicle.",
    image: "/services/oil-change.png",
    includes: [
      "Engine oil replacement",
      "Oil filter inspection & replacement",
      "Fluid level checks",
      "Basic visual inspection",
    ],
  },
  {
    slug: "brake-service",
    number: "02",
    title: "Brake Service",
    shortDescription: "Essential maintenance to ensure dependable stopping power and safety.",
    description: "Our complete brake service inspects and maintains key components to keep your braking system reliable, quiet, and responsive.",
    image: "/services/brake-service.png",
    includes: [
      "Brake pad wear assessment",
      "Rotor and drum inspection",
      "Brake fluid level & condition check",
      "Caliper functionality test",
    ],
  },
  {
    slug: "wheel-alignment",
    number: "03",
    title: "Wheel Alignment",
    shortDescription: "Optimize tire wear and vehicle handling with precise alignment.",
    description: "Proper wheel alignment ensures your vehicle travels straight, minimizes uneven tire wear, and improves fuel efficiency.",
    image: "/services/wheel-alignment.png",
    includes: [
      "Computerized wheel alignment check",
      "Camber, caster, and toe adjustment",
      "Steering wheel centering",
      "Suspension wear inspection",
    ],
  },
  {
    slug: "battery",
    number: "04",
    title: "Battery Replacement",
    shortDescription: "Reliable starting power and electrical system performance.",
    description: "We test, remove, and replace aging batteries with high-performance units to keep your vehicle starting smoothly in all conditions.",
    image: "/services/battery.png",
    includes: [
      "Battery health & charge testing",
      "Terminal and cable corrosion cleaning",
      "New battery installation",
      "Alternator output check",
    ],
  },
  {
    slug: "tire-rotation",
    number: "05",
    title: "Tire Rotation",
    shortDescription: "Extend the life of your tires with regular position rotations.",
    description: "Rotating your tires ensures even tread wear across all four wheels, improving safety, longevity, and overall handling.",
    image: "/services/tire-rotation.png",
    includes: [
      "Four-wheel rotation",
      "Tire pressure adjustment",
      "Tread depth measurement",
      "Visual tire condition check",
    ],
  },

  // --- Diagnostics ---
  {
    slug: "engine-diagnostics",
    number: "06",
    title: "Engine Diagnostics",
    shortDescription: "Identify engine performance issues quickly and accurately.",
    description: "Using advanced diagnostic equipment, we read engine sensors and live data to accurately pinpoint performance anomalies.",
    image: "/services/engine-diagnostics.png",
    includes: [
      "OBD-II computer scan",
      "Sensor data analysis",
      "Ignition system check",
      "Detailed diagnostic report",
    ],
  },
  {
    slug: "electrical",
    number: "07",
    title: "Electrical Diagnostics",
    shortDescription: "Pinpoint wiring, sensor, and battery circuit issues.",
    description: "Modern vehicles rely heavily on complex electrical systems. We troubleshoot circuits, wiring, and modules to resolve faults.",
    image: "/services/electrical.png",
    includes: [
      "Wiring & harness inspection",
      "Fuse and relay testing",
      "Sensor voltage verification",
      "Parasitic draw testing",
    ],
  },
  {
    slug: "transmission",
    number: "08",
    title: "Transmission Diagnostics",
    shortDescription: "Evaluate gear shifting, fluid condition, and transmission health.",
    description: "We diagnose rough shifting, slipping gears, and transmission warnings to help prevent costly total system failures.",
    image: "/services/transmission.png",
    includes: [
      "Transmission code scan",
      "Fluid level & quality test",
      "Road test assessment",
      "Solenoid & pressure check",
    ],
  },
  {
    slug: "check-engine",
    number: "09",
    title: "Check Engine Light",
    shortDescription: "Find out why your warning light is on and get actionable steps.",
    description: "A check engine light can indicate anything from a loose gas cap to a failing catalytic converter. We scan and explain the issue clearly.",
    image: "/services/check-engine.png",
    includes: [
      "Diagnostic trouble code scan",
      "Code reset after evaluation",
      "Root cause assessment",
      "Clear repair recommendations",
    ],
  },

  // --- Repairs ---
  {
    slug: "engine-repair",
    number: "10",
    title: "Engine Repair",
    shortDescription: "Comprehensive repair services to restore core engine performance.",
    description: "From gasket replacements to major component overhauls, our technicians restore reliability and power to your engine.",
    image: "/services/engine-repair.png",
    includes: [
      "Gasket & seal replacement",
      "Timing belt/chain repair",
      "Cooling system integration check",
      "Post-repair engine testing",
    ],
  },
  {
    slug: "transmission-repair",
    number: "11",
    title: "Transmission Repair",
    shortDescription: "Restore smooth gear shifting and power delivery.",
    description: "Whether automatic or manual, we repair gear slipping, fluid leaks, and internal mechanical wear to ensure smooth drives.",
    image: "/services/transmission-repair.png",
    includes: [
      "Fluid leak repairs",
      "Clutch/solenoid replacement",
      "Transmission flush & filter change",
      "Operational road test",
    ],
  },
  {
    slug: "suspension",
    number: "12",
    title: "Suspension Repair",
    shortDescription: "Restore ride comfort, stability, and control on rough roads.",
    description: "Worn suspension components cause bumpy rides and poor handling. We repair and replace worn parts to keep your ride smooth.",
    image: "/services/suspension.png",
    includes: [
      "Strut & shock replacement",
      "Bushing and ball joint repair",
      "Sway bar link servicing",
      "Ride height & bounce test",
    ],
  },
  {
    slug: "steering",
    number: "13",
    title: "Steering Repair",
    shortDescription: "Ensure tight, responsive steering and directional control.",
    description: "We fix power steering leaks, loose gear racks, and stiff wheels to maintain precise steering control at any speed.",
    image: "/services/steering.png",
    includes: [
      "Power steering pump inspection",
      "Rack and pinion service",
      "Tie rod replacement",
      "Fluid leak remediation",
    ],
  },
  {
    slug: "exhaust",
    number: "14",
    title: "Exhaust Repair",
    shortDescription: "Reduce noise, manage emissions, and maintain fuel efficiency.",
    description: "We repair leaking mufflers, damaged catalytic converters, and corroded exhaust pipes to keep your vehicle quiet and compliant.",
    image: "/services/exhaust.png",
    includes: [
      "Muffler & pipe repair",
      "Catalytic converter check",
      "Exhaust manifold gasket replacement",
      "Emissions leak inspection",
    ],
  },

  // --- Detailing ---
  {
    slug: "interior-detailing",
    number: "15",
    title: "Interior Detailing",
    shortDescription: "Deep cleaning and conditioning for a fresh cabin environment.",
    description: "We vacuum, steam clean, and condition every interior surface—from leather seats to dashboards—leaving your vehicle spotless.",
    image: "/services/interior-detailing.png",
    includes: [
      "Upholstery carpet shampooing",
      "Leather cleaning & conditioning",
      "Dashboard & console sanitization",
      "Interior glass cleaning",
    ],
  },
  {
    slug: "exterior-detailing",
    number: "16",
    title: "Exterior Detailing",
    shortDescription: "Hand wash, gloss enhancement, and surface protection.",
    description: "A thorough hand wash combined with clay bar treatment and wax application to revive and protect your vehicle's paintwork.",
    image: "/services/exterior-detailing.png",
    includes: [
      "Hand wash & microfiber dry",
      "Clay bar surface treatment",
      "High-shine protective wax",
      "Wheel & tire dressing",
    ],
  },
  {
    slug: "ceramic-coating",
    number: "17",
    title: "Ceramic Coating",
    shortDescription: "Long-lasting hydrophobic protection and ultimate paint shine.",
    description: "Ceramic coating creates a durable protective shield over your paint, repelling water, dirt, UV rays, and light scratches.",
    image: "/services/ceramic-coating.png",
    includes: [
      "Paint decontamination",
      "Single/multi-stage paint correction",
      "Professional ceramic layer application",
      "Hydrophobic topcoat treatment",
    ],
  },
  {
    slug: "paint-protection",
    number: "18",
    title: "Paint Protection",
    shortDescription: "Shield your clear coat from stone chips, scratches, and wear.",
    description: "Protect high-impact areas of your car with clear film and sealants designed to prevent road debris damage and paint fading.",
    image: "/services/paint-protection.png",
    includes: [
      "High-impact zone film application",
      "Paint sealant layer",
      "UV protection treatment",
      "Edge-to-edge finish inspection",
    ],
  },
];