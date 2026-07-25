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
  {
    slug: "routine-maintenance",
    number: "01",
    title: "Routine Maintenance",
    shortDescription: "Essential preventative care to keep your vehicle reliable, lubricated, and running efficiently.",
    description: "Regular maintenance helps protect core engine components, maximize fuel efficiency, and extend the overall lifespan of your vehicle.",
    image: "/services/oil-change.png",
    includes: [
      "Engine oil & filter replacement",
      "Four-wheel tire rotation & tread check",
      "Fluid level & condition inspection",
      "Tire pressure adjustment & visual health check",
    ],
  },
  {
    slug: "vehicle-diagnostics",
    number: "02",
    title: "Vehicle Diagnostics",
    shortDescription: "Accurate troubleshooting for check engine lights, electrical faults, and engine anomalies.",
    description: "Using advanced diagnostic equipment, we scan live sensor data and trace electrical circuits to pinpoint issues quickly and clearly.",
    image: "/services/diagnostics.png",
    includes: [
      "OBD-II computer & check engine scan",
      "Electrical circuit & parasitic draw testing",
      "Sensor voltage & ignition system checks",
      "Detailed diagnostic report & actionable plan",
    ],
  },
  {
    slug: "brakes-steering-suspension",
    number: "03",
    title: "Brakes, Steering & Suspension",
    shortDescription: "Ensure maximum safety, smooth handling, and precise directional control.",
    description: "We inspect, repair, and align your vehicle's safety systems to eliminate vibrations, bumpy rides, and poor stopping power.",
    image: "/services/brake-service.png",
    includes: [
      "Brake pad, rotor, and fluid inspection",
      "Computerized alignment & suspension adjustment",
      "Strut, shock, and tie rod repair",
      "Power steering pump & rack servicing",
    ],
  },
  {
    slug: "engine-transmission-repair",
    number: "04",
    title: "Engine, Powertrain & Exhaust",
    shortDescription: "Restore smooth power delivery, proper gear shifting, and efficient exhaust flow.",
    description: "From fixing engine leaks and slipping gears to repairing exhaust pipes and major component overhauls, we restore full power and efficiency.",
    image: "/services/engine-transmission-repair.png",
    includes: [
      "Gasket, seal & timing belt/chain repair",
      "Transmission fluid leak & solenoid service",
      "Muffler, catalytic converter & exhaust repair",
      "Post-repair operational road testing",
    ],
  },
  {
    slug: "battery-electrical",
    number: "05",
    title: "Electrical & Climate Control",
    shortDescription: "Dependable starting power, AC climate control, and complete electrical performance.",
    description: "We service batteries, alternators, and complete heating and air conditioning systems to keep your vehicle starting reliably and cabin air comfortable in all conditions.",
    image: "/services/battery-electrical.png",
    includes: [
      "Battery health, charge & load testing",
      "AC system pressure test, leak check & refrigerant recharge",
      "Cabin air filter inspection & climate control diagnosis",
      "Alternator, starter & wiring circuit inspection",
    ],
  },
  {
    slug: "auto-detailing-protection",
    number: "06",
    title: "Detailing & Paint Protection",
    shortDescription: "Complete cabin restoration alongside long-lasting exterior paint protection.",
    description: "From deep interior cleaning to ceramic coatings and protective films, we keep your vehicle looking showroom-new and protected from elements.",
    image: "/services/auto-detailing-protection.png",
    includes: [
      "Deep interior steam clean & leather conditioning",
      "Hand wash, clay bar & high-shine wax",
      "Professional ceramic coating application",
      "High-impact zone paint protection film",
    ],
  },
];