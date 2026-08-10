export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenuData {
  label: string;
  href?: string;
  sections: NavigationSection[];
}

export const servicesMenu: MegaMenuData = {
  label: "Services",
  href: "/services",

  sections: [
    {
      title: "Maintenance",
      items: [
        { label: "Oil Change", href: "/services/routine-maintenance" },
        { label: "Brake Service", href: "/services/brakes-steering-suspension" },
        { label: "Wheel Alignment", href: "/services/brakes-steering-suspension" },
        { label: "Battery Replacement", href: "/services/battery-electrical" },
        { label: "Tire Rotation", href: "/services/routine-maintenance" },
      ],
    },
    {
      title: "Diagnostics",
      items: [
        { label: "Engine Diagnostics", href: "/services/vehicle-diagnostics" },
        { label: "Electrical Diagnostics", href: "/services/vehicle-diagnostics" },
        { label: "Transmission Diagnostics", href: "/services/vehicle-diagnostics" },
        { label: "Check Engine Light", href: "/services/vehicle-diagnostics" },
        { label: "Suspension Diagnostics", href: "/services/vehicle-diagnostics" },
      ],
    },
    {
      title: "Repairs",
      items: [
        { label: "Engine Repair", href: "/services/engine-transmission-repair" },
        { label: "Transmission Repair", href: "/services/engine-transmission-repair" },
        { label: "Suspension Repair", href: "/services/brakes-steering-suspension" },
        { label: "Steering Repair", href: "/services/brakes-steering-suspension" },
        { label: "Exhaust Repair", href: "/services/engine-transmission-repair" },
      ],
    },
    {
      title: "Detailing",
      items: [
        { label: "Interior Detailing", href: "/services/auto-detailing-protection" },
        { label: "Exterior Detailing", href: "/services/auto-detailing-protection" },
        { label: "Ceramic Coating", href: "/services/auto-detailing-protection" },
        { label: "Paint Protection", href: "/services/auto-detailing-protection" },
      ],
    },
  ],
};

export const inventoryMenu: MegaMenuData = {
  label: "Inventory",
  href: "/inventory",

  sections: [
    {
      title: "Engine",
      items: [
        { label: "Oil Filters", href: "/inventory?category=Filters" },
        { label: "Spark Plugs", href: "/inventory?category=Engine%20Parts" },
        { label: "Air Filters", href: "/inventory?category=Filters" },
        { label: "Timing Belts", href: "/inventory?category=Engine%20Parts" },
      ],
    },

    {
      title: "Brakes",
      items: [
        { label: "Brake Pads", href: "/inventory?category=Brakes" },
        { label: "Brake Rotors", href: "/inventory?category=Brakes" },
        { label: "Brake Fluid", href: "/inventory?category=Brakes" },
      ],
    },

    {
      title: "Suspension",
      items: [
        { label: "Shock Absorbers", href: "/inventory?category=Suspension" },
        { label: "Control Arms", href: "/inventory?category=Suspension" },
        { label: "Springs", href: "/inventory?category=Suspension" },
      ],
    },

    {
      title: "Accessories",
      items: [
        { label: "Seat Covers", href: "/inventory?category=Accessories" },
        { label: "Floor Mats", href: "/inventory?category=Accessories" },
        { label: "Car Batteries", href: "/inventory?category=Electrical" },
        { label: "Wipers", href: "/inventory?category=Exterior" },
      ],
    },
  ],
};

export type NavigationItemType = 
  | { label: string; href: string }
  | MegaMenuData;

export const navigation: NavigationItemType[] = [
  { label: "About", href: "/about" },
  { label: "Vehicles", href: "/vehicles" },
  servicesMenu,
  inventoryMenu,
];