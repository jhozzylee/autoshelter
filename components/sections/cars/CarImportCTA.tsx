"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Car } from "@/data/cars";
import ImportModal from "./ImportModal";

interface CarImportCTAProps {
  car: Car;
  className?: string;
  buttonText?: string;
}

export default function CarImportCTA({ car, className = "", buttonText = "Import This Car" }: CarImportCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {buttonText}
      </Button>

      <ImportModal
        car={car}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}