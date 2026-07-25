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