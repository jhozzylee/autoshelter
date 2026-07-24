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
        { label: "Oil Change", href: "/services/oil-change" },
        { label: "Brake Service", href: "/services/brake-service" },
        { label: "Wheel Alignment", href: "/services/wheel-alignment" },
        { label: "Battery Replacement", href: "/services/battery" },
        { label: "Tire Rotation", href: "/services/tire-rotation" },
      ],
    },

    {
      title: "Diagnostics",

      items: [
        { label: "Engine Diagnostics", href: "/services/engine-diagnostics" },
        { label: "Electrical Diagnostics", href: "/services/electrical" },
        { label: "Transmission Diagnostics", href: "/services/transmission" },
        { label: "Check Engine Light", href: "/services/check-engine" },
      ],
    },

    {
      title: "Repairs",

      items: [
        { label: "Engine Repair", href: "/services/engine-repair" },
        { label: "Transmission Repair", href: "/services/transmission-repair" },
        { label: "Suspension Repair", href: "/services/suspension" },
        { label: "Steering Repair", href: "/services/steering" },
        { label: "Exhaust Repair", href: "/services/exhaust" },
      ],
    },

    {
      title: "Detailing",

      items: [
        { label: "Interior Detailing", href: "/services/interior-detailing" },
        { label: "Exterior Detailing", href: "/services/exterior-detailing" },
        { label: "Ceramic Coating", href: "/services/ceramic-coating" },
        { label: "Paint Protection", href: "/services/paint-protection" },
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
        { label: "Oil Filters", href: "/inventory/oil-filters" },
        { label: "Spark Plugs", href: "/inventory/spark-plugs" },
        { label: "Air Filters", href: "/inventory/air-filters" },
        { label: "Timing Belts", href: "/inventory/timing-belts" },
      ],
    },

    {
      title: "Brakes",

      items: [
        { label: "Brake Pads", href: "/inventory/brake-pads" },
        { label: "Brake Rotors", href: "/inventory/brake-rotors" },
        { label: "Brake Fluid", href: "/inventory/brake-fluid" },
      ],
    },

    {
      title: "Suspension",

      items: [
        { label: "Shock Absorbers", href: "/inventory/shocks" },
        { label: "Control Arms", href: "/inventory/control-arms" },
        { label: "Springs", href: "/inventory/springs" },
      ],
    },

    {
      title: "Accessories",

      items: [
        { label: "Seat Covers", href: "/inventory/seat-covers" },
        { label: "Floor Mats", href: "/inventory/floor-mats" },
        { label: "Car Batteries", href: "/inventory/batteries" },
        { label: "Wipers", href: "/inventory/wipers" },
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